import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { renderOptions, richTextOptions } from "../utility/richtext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Convert } from "../utility/convert"

const Contact = props => {
  let content = props.pageContext
  let page = Convert.toPageModel(content)

  return (
    <Layout>
      <SEO title={page.title} />
      
      {documentToReactComponents(JSON.parse(content.description.raw), renderOptions(content.description.references))}
    </Layout>
  )
}

export default Contact
