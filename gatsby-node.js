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
                type
              }
            }
          }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }
  const {
    allContentfulPage
  } = result.data

  const homeTemplate = path.resolve(`./src/templates/home.js`);
  const videoTemplate = path.resolve(`./src/templates/video.js`);
  const linkTemplate = path.resolve(`./src/templates/link.js`);
  const contactTemplate = path.resolve(`./src/templates/contact.js`);
  const imagesTemplate = path.resolve(`./src/templates/images.js`);

  allContentfulPage.edges.forEach(edge => {
    let template
    switch (edge.node.type) {
      case "home":
        template = homeTemplate
        break
      case "video":
        template = videoTemplate
        break
      case "link":
        template = linkTemplate
        break
      case "contact":
        template = contactTemplate
        break
      case "images":
        template = imagesTemplate
        break
      default:
        template = homeTemplate
    }

      createPage({
        path: edge.node.slug,
        component: slash(template),
        context: edge.node,
      })
  })

}