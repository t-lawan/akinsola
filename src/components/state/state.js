import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import { isLoaded, setPages, setNavbarLinks } from "../../store/action";

const State = props => {
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
              projectType
              videoLink
              link
            }
          }
        }
        allContentfulNavbarLink {
          edges {
            node {
              contentful_id
              page {
                contentful_id
                title
                slug
                projectType
              }
              title
              order
            }
          }
        }
      }
    `
  )

  if (!props.isLoaded) {
    let { allContentfulPage, allContentfulNavbarLink } = data

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let navbarLinks = Convert.toModelArray(allContentfulNavbarLink, Convert.toNavbarLinkModel)
    props.setPages(pages)
    props.setNavbarLinks(navbarLinks)
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPages: pages =>
      dispatch(setPages(pages)),
    loaded: () =>
      dispatch(isLoaded()),
    setNavbarLinks: navbar_links => 
      dispatch(setNavbarLinks(navbar_links))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(State)
