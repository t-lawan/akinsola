import React, { useState } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { size } from "../../index.styles"
import { TOGGLE_NAVBAR, toggleModal } from "../../store/action"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Convert } from "../../utility/convert"
export const FILTER_VIEW = {
  WEB: "web",
  PROJECTS: "portfolio",
  ALL: "all",
}
const NavbarWrapper = styled.div`
  z-index: 100;
  padding-top: 0;
  display: block;
  @media (max-width: ${size.tablet}) {
    position: initial;
    /* background-color: red; */
    display: ${(props) => (props.$showInMobile ? "inherit" : "none")};
    /* color: ${(props) => (props.showInMobile ? "red" : "black")}; */
    /* border-bottom: 1px solid black; */
  }
`
const NavbarTitle = styled.p`
  margin-bottom: 1em;
  font-size: 1rem;
  color: rgb(54, 54, 82);
  &:hover {
    color: transparent;
  }
  @media (max-width: ${size.tablet}) {
    margin-bottom: 0.5em;
    color: ${(props) =>
      props.$reverse ? `rgb(54,54,82)` : `rgb(240, 235, 255)`};
  }
`

const NavbarLink = styled(Link)`
  @media (max-width: ${size.tablet}) {
    color: ${(props) =>
      props.$reverse ? `rgb(54,54,82))` : `rgb(240, 235, 255)`};
  }
`

const Navbar = ({
  showInMobile,
  $reverse,
}) => {

  let data = useStaticQuery(graphql`
    {
      contentfulPageInfo {
        navbarList {
          contentful_id
          page {
            contentful_id
            title
            slug
            projectType
            type
          }
          title
        }
      }
    }
  `)

  const links = Convert.toNavbarLinkList(data.contentfulPageInfo.navbarList)
  return (
    <NavbarWrapper $showInMobile={showInMobile}>
      {links.map((link, ind) => (
        <NavbarTitle $reverse={$reverse} key={ind}>
          <NavbarLink
            activeClassName="active"
            to={`/${link.page.slug}`}
            $reverse={$reverse}
          >
            {link.title.toLowerCase()}
          </NavbarLink>
        </NavbarTitle>
      ))}
    </NavbarWrapper>
  )
}



export default Navbar
