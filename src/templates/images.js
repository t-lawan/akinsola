import React from "react"
import Layout from "../components/layout/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../utility/richtext";

const Images = props => {
    let content = props.pageContext
    console.log('PROPS', content )
    return (
        <Layout>
            {documentToReactComponents(content.description.json, richTextOptions)}
        </Layout>
    )
}

export default Images;