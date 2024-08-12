import React from "react"
import Layout from "../components/layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import { Convert } from "../utility/convert"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo/seo"

const ImageCarousel = styled(Carousel)`
  background: transparent;
  /* min-height: 20vh; */

  .carousel .slide {
    background: transparent;
    list-style-type: none;
  }
  margin-bottom: 2rem;
`

const ImageCarouselWrapper = styled.div``

const Image = styled(GatsbyImage)`
  max-height: 60vh;
  img {
    object-fit: contain !important;
  }
`
const Images = (props) => {
  let content = props.pageContext
  let page = Convert.toPageModel(content)

  return (
    <Layout>
      <Seo title={page.title} />
      {page.images && (
        <ImageCarouselWrapper>
          <ImageCarousel
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            centerMode={false}
            swipeable={false}
            stopOnHover={true}
            dynamicHeight={false}
            infiniteLoop={true}
            autoPlay={true}
          >
            {page.images.map((im, index) => (
              <Image
                key={index}
                $fadeIn={true}
                alt={page.title}
                image={getImage(im.gatsbyImageData)}
              />
            ))}
          </ImageCarousel>
        </ImageCarouselWrapper>
      )}
      {documentToReactComponents(
        JSON.parse(content.description.raw),
        richTextOptions
      )}
    </Layout>
  )
}

export default Images
