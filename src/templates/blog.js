import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { richTextOptions } from "../utility/richtext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Convert } from "../utility/convert"

const Blog = props => {
  let content = props.pageContext
  let page = Convert.toPageModel(content)
  return (
    <Layout>
      <SEO title={page.title} />
      {documentToReactComponents(page.description.json, richTextOptions)}
    </Layout>
  )
}

export default Blog
