import React from "react"
import Layout from "../components/layout/layout";
import Seo from '../components/seo/seo';
import styled from 'styled-components'
import { size } from "../index.styles";
import { connect } from "react-redux"
import Navbar from "../components/navbar/navbar";
import { graphql, useStaticQuery } from "gatsby";
import { Convert } from "../utility/convert";
import { ContentWrapper } from "../templates/project";
import Exhibitions from "../components/cv/exhibitions";
import Introduction from "../components/cv/introduction";
import Awards from "../components/cv/awards";
import Education from "../components/cv/education";

const MobileIndexWrapper = styled.div`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: block;
  }
`

const CVPage = (props) => {
    let data = useStaticQuery(graphql`
{
  contentfulPageInfo {
    contentful_id
    title
    description {
      description
    }
    exhibitions {
      title
      type
      date
      space
      location
      workTitle
    }
    awards
    education
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
                <Introduction info={info} />
                <Education info={info} />
                <Exhibitions exhibitions={info.exhibitions} />
                <Awards info={info} />
            </ContentWrapper>

        </Layout>
    )
}
const mapStateToProps = state => {
    return {
        page_info: state.page_info
    }
}

export default connect(mapStateToProps, null)(CVPage)
