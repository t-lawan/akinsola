import React from "react"
import Layout from "../components/layout/layout";
import Seo from '../components/seo/seo';
import styled from 'styled-components'
import { size } from "../index.styles";
import { connect } from "react-redux"
import Navbar from "../components/navbar/navbar";
import { graphql, useStaticQuery } from "gatsby";
import { Convert } from "../utility/convert";
import { ImageCarousel } from "../components/image-carousel/image-carousel";
import { ContentWrapper } from "../templates/project";

const MobileIndexWrapper = styled.div`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: block;
  }
`

const IndexPage = (props) => {
  let data = useStaticQuery(graphql`
      {
        contentfulPageInfo {
          contentful_id
          title
          description {
            description
          }
          images {
            image {
              gatsbyImageData
              filename
            }
          }
        }
      }
    `)

  const info = Convert.toPageInfoModel(data.contentfulPageInfo)


  return (
    <Layout>
      <Seo title="+" />
      <MobileIndexWrapper>
        <Navbar $showInMobile={true} reverse={true} />
      </MobileIndexWrapper>
      <ContentWrapper>
        <ImageCarousel images={info.images} />
      </ContentWrapper>

    </Layout>
  )
}
const mapStateToProps = state => {
  return {
    page_info: state.page_info
  }
}

export default connect(mapStateToProps, null)(IndexPage)
