import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Convert } from "../../utility/convert";

const NavbarWrapper = styled.div`
  padding: 1em;
  overflow-y: scroll;
`
const NavbarTitle = styled.p`
  margin-bottom: 2em;
  &:hover {
    color: transparent !important;
  }
  animation: fadeIn 1s ease-in-out;

  padding-left: ${props => props.randomPadding};

  @keyframes fadeIn {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1;
    }
  }
`

const createRandomPadding = () => {
  const padding = Math.floor(Math.random() * 6) + 1
  return `${padding}em`
}

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
              contentful_id
              description {
                json
              }
              images {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              order
            }
          }
        }
      }
    `
  )

  const links = Convert.toModelArray(data.allContentfulPage, Convert.toPageModel).sort((a, b) => {
    return a.order - b.order;
  });

  console.log('LINK', links);

  return (
    <NavbarWrapper>
      {links.map((link, index) => (
        <NavbarTitle randomPadding={createRandomPadding()} key={index}>
          <Link to={`/${link.slug}`}>{link.title.toLowerCase()}</Link>
        </NavbarTitle>
      ))}
    </NavbarWrapper>
  )
}

export default Navbar
