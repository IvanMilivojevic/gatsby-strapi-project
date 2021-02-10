import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Projects from "../components/Projects/Projects"

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <Projects projects={projects} title="All Projects" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
