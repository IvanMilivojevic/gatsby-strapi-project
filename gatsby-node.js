const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogDetailTemplate = path.resolve(`src/templates/blog-detail.js`)

  const result = await graphql(`
    query GetBlogs {
      allStrapiBlogs {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allStrapiBlogs.nodes.map(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: blogDetailTemplate,
      context: {
        slug: blog.slug,
      },
    })
  })
}
