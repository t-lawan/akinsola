import React from "react"
import styled from "styled-components"
import { size } from "../index.styles"
import { renderContent } from "../models/Content"
import Layout from "../components/layout/layout"

const ContentWrapper = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 80%;
  @media only screen and (max-width: ${size.tablet}) {
    width: 100%;
  }
`

const ProjectPage = context => {

  let page = context.pageContext

  console.log('page', page)
  return (
    <Layout title={page.title} description={page.description}>
      {page.content.map((content, index) => (
        <ContentWrapper key={index}>{renderContent(content)}</ContentWrapper>
      ))}
    </Layout>
  )
}

export default ProjectPage
