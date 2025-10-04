/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
allContentfulPage {
    edges {
      node {
        title
        slug
        contentful_id
        description {
          raw
          references {
            url
            contentful_id
          }
        }
        link
        contentList {
          item {
            ... on ContentfulImage {
              id
              image {
                gatsbyImageData
                filename
              }
            }
            ... on ContentfulText {
              id
              text {
                raw
              }
            }
            ... on ContentfulVideo {
              id
              url
            }
          }
          item {
            ... on ContentfulImage {
              id
              image {
                gatsbyImageData
                filename
              }
            }
            ... on ContentfulText {
              id
              text {
                raw
              }
            }
            ... on ContentfulVideo {
              id
              url
            }
          }
        }
      }
    }
  }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }
  const { allContentfulPage } = result.data

  allContentfulPage.edges.forEach(({ node }) => {
    const homeTemplate = path.resolve(`./src/templates/project.js`);

    createPage({
      path: node.slug,
      component: slash(homeTemplate),
      context: {
        id: node.contentful_id,
        title: node.title,
        slug: node.slug,
        description: node.description,
        content: node.contentList.map(content => content.item),
      },
    })
  })




  
  }
