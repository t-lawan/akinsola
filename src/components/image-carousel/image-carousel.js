import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import styled from "styled-components"

const Viewport = styled.div`
  overflow: hidden;
  margin-bottom: 2rem;
`

const Track = styled.div`
  display: flex;
`

const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
`

const ImageBox = styled.div`
  aspect-ratio: 16 / 9;
  max-height: 60vh;
`

export const ImageCarousel = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 4000, stopOnMouseEnter: true }),
  ])

  return (
    <Viewport ref={emblaRef}>
      <Track>
        {images.map((image, index) => (
          <Slide key={index}>
            <ImageBox>
              <GatsbyImage
                image={getImage(image)}
                alt={image.description ?? ""}
                objectFit="contain"
                style={{ width: "100%", height: "100%" }}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </ImageBox>
            {image.description && <p>{image.description}</p>}
          </Slide>
        ))}
      </Track>
    </Viewport>
  )
}