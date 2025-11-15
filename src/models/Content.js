import React from "react"
import { getImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getRichTextOptions } from "../utility/richtext"
import { ImageWrapper } from "../components/image-wrapper/image-wrapper"
import { VideoPlayer } from "../components/video-player/video-player"
import { ImageCarousel } from "../components/image-carousel/image-carousel"
import { Colours } from "../index.styles"
import styled from "styled-components"
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


const StyledLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px dotted ${Colours.dark_purple};
  margin: 2rem 0;

`
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
      getRichTextOptions(content.text.references)
    )
  }

  if(content.show){
    return <StyledLine />
  }

  return ""
}
