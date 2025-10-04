import React from "react"
import { getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"
import { ImageWrapper } from "../components/image-wrapper/image-wrapper"
import { VideoPlayer } from "../components/video-player/video-player"
import { ImageCarousel } from "../components/image-carousel/image-carousel"

export class Content {
  id
  type
  content
  constructor(id, type, content) {
    this.id = id
    this.type = type
    this.content = content
  }
}

export const renderContent = content => {

  if (content.image) {
    const image = getImage(content.image)
    return <ImageWrapper image={image} content={content} />
  }

  if (content.imageCarousel) {
    return <ImageCarousel images={content.imageCarousel} />
  }

  if (content.url) {
    return <VideoPlayer url={content.url} />
  }

  if (content.text) {
    return documentToReactComponents(
      JSON.parse(content.text.raw),
      richTextOptions
    )
  }

  return ""
}
