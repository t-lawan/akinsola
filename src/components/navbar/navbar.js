import React from "react"
import styled from "styled-components"
import { Colours, size } from "../../index.styles"
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
    position: absolute;
    width: 70vw;
    height: 100vh;
    margin: 0;
    padding: 0.5rem;
    background-color: ${Colours.dark_purple};
    top: 0;
    left: 0;
    /* position: relative; */
    display: ${(props) => (props.$showInMobile ? "inherit" : "none")};
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
      props.$reverse ? Colours.dark_purple : Colours.light_purple};
  }
`

const NavbarLink = styled(Link)`
  @media (max-width: ${size.tablet}) {
    color: ${(props) =>
      props.$reverse ? Colours.light_purple : Colours.dark_purple};
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
