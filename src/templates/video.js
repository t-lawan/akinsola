import React from "react"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { TextBlock } from "../index.styles";
import styled from "styled-components"

const VideoContainer = styled.div`
  text-align: center;
`
const Video = props => {
  let pageInfo = Convert.toPageModel(props.pageContext)
  return (
    <Layout>
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
          ? documentToReactComponents(pageInfo.description.json)
          : null}
      </TextBlock>
    </Layout>
  )
}

export default Video
