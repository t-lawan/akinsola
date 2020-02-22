import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import * as ActionTypes from "../../store/action"
import { Convert } from "../../utility/convert"

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
      }
    `
  )

  if (!props.isLoaded) {
    let { allContentfulPage } = data

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)

    props.setPages(pages)
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
      dispatch({
        type: ActionTypes.SET_PAGES,
        pages: pages,
      }),
    loaded: () =>
      dispatch({
        type: ActionTypes.IS_LOADED,
      }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(State)
