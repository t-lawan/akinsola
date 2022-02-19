import React from "react"
import Layout from "../components/layout/layout";
import SEO from '../components/seo/seo';
import styled from 'styled-components'
import { size } from "../index.styles";
import { connect } from "react-redux"
import Navbar from "../components/navbar/navbar";

const MobileIndexWrapper = styled.div`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: block;
  }
`

const IndexPage = (props) => {
  
  return (
  <Layout>
     <SEO title="+" />
     <MobileIndexWrapper>
       <Navbar showInMobile={true} reverse={true} />
     </MobileIndexWrapper>
  </Layout>
)}
const mapStateToProps = state => {
  return {
    page_info: state.page_info
  }
}

export default connect(mapStateToProps, null)(IndexPage)
