import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import Jobs from "../components/Jobs/Jobs"
import Projects from "../components/Projects/Projects"

const Home = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" moreLink />
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
  }
`

export default Home
