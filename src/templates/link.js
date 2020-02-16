import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { Convert } from "../utility/convert"

const Link = props => {
  let content = props.pageContext
  let page = Convert.toPageModel(content)

  return (
    <Layout>
      <SEO title={page.title} />
      <p> Link </p>
    </Layout>
  )
}

export default Link
