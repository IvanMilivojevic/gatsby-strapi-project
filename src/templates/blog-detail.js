import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Layout from "../layouts/Layout"
import SEO from "../layouts/Seo/Seo"
import styles from "../layouts/Primary/blog-detail.module.css"

const BlogDetail = ({ data }) => {
  const {
    strapiBlogs: { content, date, title, description, image },
  } = data

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div className="section-center">
        <h1>{title}</h1>
        <p>{date}</p>
        <Image fluid={image.childImageSharp.fluid} />
        <ReactMarkdown source={content} className={styles.blogContent} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogArticle($slug: String) {
    strapiBlogs(slug: { eq: $slug }) {
      content
      date
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default BlogDetail
