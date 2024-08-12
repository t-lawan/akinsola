import React from "react"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { TextBlock } from "../index.styles"
import styled from "styled-components"
import SEO from "../components/seo/seo"

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  iframe {
    /* left: 0;
    top: 0; */
    width: 100%;
    /* position: absolute; */
  }
  /* text-align: center; */
`
const Video = props => {
  let pageInfo = Convert.toPageModel(props.pageContext)
  return (
    <Layout>
      <SEO title={pageInfo.title} />

      <VideoContainer>
        <iframe
          title={pageInfo.title}
          src={pageInfo.videoLink}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      <TextBlock>
        {pageInfo.description
          ? documentToReactComponents(JSON.parse(pageInfo.description.raw))
          : null}

      </TextBlock>
    </Layout>
  )
}

export default Video
