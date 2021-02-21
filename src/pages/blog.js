import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Blogs from "../components/Blogs/Blogs"
import SEO from "../layouts/Seo/Seo"

const BlogPage = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Blog" description="Articles about development" />
      <Blogs blogs={blogs} title="BLOG" className="blog-main" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        date(formatString: "D-MMM-YYYY")
        description
        id
        slug
        title
        image {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default BlogPage
