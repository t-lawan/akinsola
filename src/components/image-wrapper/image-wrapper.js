import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utility/richtext"
import styled from "styled-components"
import { Colours } from "../../index.styles"
const StyledImageWrapper = styled.div`
  .gatsby-image-wrapper {
    border: 2px solid ${Colours.dark_purple};
}
`

const Caption = styled.p`
  margin-top: 0.5rem;
  text-align: center;
`

export const ImageWrapper = props => {
  return (
    <StyledImageWrapper>
      <GatsbyImage
        width={"100%"}
        image={props.image}
        alt={props.content.image.description ?? "image"}
        quality={100}
      />

      <Caption>
        {" "}
        
        {props.content.description ? documentToReactComponents(
          JSON.parse(props.content.description.raw),
          richTextOptions
        ): null}{" "}
      </Caption>
    </StyledImageWrapper>
  )
}
