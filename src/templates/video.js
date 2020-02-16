import React from "react"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { TextBlock } from "../index.styles";

const Video = props => {
  let pageInfo = Convert.toPageModel(props.pageContext)
  return (
    <Layout>
      <iframe
        src="https://player.vimeo.com/video/325285352"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <TextBlock>
        {pageInfo.description
          ? documentToReactComponents(pageInfo.description.json)
          : null}
      </TextBlock>
    </Layout>
  )
}

export default Video
