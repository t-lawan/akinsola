import React from "react"
import Layout from "../components/layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"
import { Convert } from "../utility/convert"
import Img from "gatsby-image"
import SEO from "../components/seo/seo"

const ImageCarousel = styled(Carousel)`
  background: transparent;
  /* min-height: 20vh; */

  .carousel .slide {
    background: transparent;
    list-style-type: none;
  }
  margin-bottom: 2rem;
`

const Image = styled(Img)`
  max-height: 50vh;
  img {
    object-fit: contain !important;

  }
`
const Images = props => {
  let content = props.pageContext
  let page = Convert.toPageModel(content)

  return (
    <Layout>
      <SEO title={page.title} />
      {page.images ? (
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
            <Image key={index} fadeIn={true} fluid={im.fluid} />
          ))}
        </ImageCarousel>
      ) : null}
      {documentToReactComponents(content.description.json, richTextOptions)}
    </Layout>
  )
}

export default Images
