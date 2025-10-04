import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

const StyledCarousel = styled(Carousel)`
  background: transparent;
  /* min-height: 20vh; */
  /* width: 80%; */

  .carousel .slide {
    background: transparent;
    list-style-type: none;
    text-align: left;
  }
  margin-bottom: 2rem;
`

const StyledImage = styled(GatsbyImage)`
  max-height: 60vh;
  img {
    object-fit: contain !important;
  }
  position: absolute;
  top: 0;
  left: 0;
`

const StyledImageWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`

export const ImageCarousel = ({ images }) => {
  return (
    <StyledCarousel
      showThumbs={false}
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      centerMode={false}
      swipeable={false}
      stopOnHover={true}
      dynamicHeight={false}
      infiniteLoop={true}
      autoPlay={true}
      width={"100%"}
    >
      {images.map((image, index) => {
        const img = getImage(image)

        return (
          <StyledImageWrapper key={index}>
            <StyledImage image={img} alt={image.description ?? ""} />
            <p> {image.description} </p>
          </StyledImageWrapper>
        )
      })}
    </StyledCarousel>
  )
}
