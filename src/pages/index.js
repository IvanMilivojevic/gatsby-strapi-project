import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import Jobs from "../components/Jobs/Jobs"
import Projects from "../components/Projects/Projects"
import Blogs from "../components/Blogs/Blogs"

const Home = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout transparentHeader>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" moreLink />
      <Blogs blogs={blogs} title="Latest Articles" moreLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }, limit: 3, sort: { fields: created_at, order: DESC }) {
      nodes {
        description
        links {
          id
          link
          title
        }
        stack {
          id
          name
        }
        strapiId
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        category
        date(formatString: "D-MMM-YYYY")
        description
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Home
