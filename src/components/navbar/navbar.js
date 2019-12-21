import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";


const NavbarWrapper = styled.div`
  padding: 1em;
  overflow-y: scroll;
`
const NavbarTitle = styled.p`
  margin-bottom: 2em;
  &:hover {
    animation: shake 0.5s; 
    transform: translate3d(0, 0, 0);
  }

  padding-left: 7em;
  &:nth-child(2n) {
    padding-left: 8em;
  }
  &:nth-child(3n) {
    padding-left: 6em;
  }

  &:nth-child(5n) {
    padding-left: 5em;
  }

  @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  /* 10% { transform: translate(-1px, -2px) rotate(-1deg); } */
  /* 20% { transform: translate(-3px, 0px) rotate(1deg); } */
  /* 30% { transform: translate(3px, 2px) rotate(0deg); } */
  /* 40% { transform: translate(1px, -1px) rotate(1deg); } */
  50% { transform: translate(-1px, 2px) rotate(2deg); }
  /* 60% { transform: translate(-3px, 1px) rotate(0deg); } */
  /* 70% { transform: translate(3px, 1px) rotate(-1deg); } */
  /* 80% { transform: translate(-1px, -1px) rotate(1deg); } */
  /* 90% { transform: translate(1px, 2px) rotate(0deg); } */
  /* 100% { transform: translate(1px, -2px) rotate(-1deg); } */
}
`
const Navbar = props => {
  let data = useStaticQuery(
    graphql`
        {
        allContentfulPage {
            edges {
              node {
                title
                slug
                type
              }
            }
          }
    }
    `
  )

  const links = data.allContentfulPage.edges;
  console.log(links);

  return (
    <NavbarWrapper>
    {links.map((link, index) => (
      <NavbarTitle key={index}>
        <AniLink to={link.node.slug}>
        {link.node.title}

        </AniLink>
        </NavbarTitle>
    ))}

    </NavbarWrapper>
  )
}

export default Navbar
