import React from "react"
import Layout from "../components/layout/layout";
import Seo from '../components/seo/seo';
import styled from 'styled-components'
import { size } from "../index.styles";
import { connect } from "react-redux"
import Navbar, { FILTER_VIEW } from "../components/navbar/navbar";
import { changeFilterView } from "../store/action";

const MobileIndexWrapper = styled.div`
  display: none;
  @media (max-width: ${size.tablet}) {
    display: block;
  }
`

const TechPage = (props) => {

  if(props.filter_view !== FILTER_VIEW.WEB){
    props.changeFilterView(FILTER_VIEW.WEB)
  }
   
  return (
  <Layout>
     <Seo title="+" />
     <MobileIndexWrapper>
       <Navbar $showInMobile={true} reverse={true} />
     </MobileIndexWrapper>
  </Layout>
)}
const mapStateToProps = state => {
  return {
    page_info: state.page_info,
    filter_view: state.filter_view
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeFilterView: (filter_view) => dispatch(changeFilterView(filter_view)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TechPage)
