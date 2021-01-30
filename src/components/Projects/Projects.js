import React from "react"
import { Link } from "gatsby"
import SectionTitle from "../SectionTitle/SectionTitle"
import Project from "./Project"

const Projects = ({ projects, title, moreLink }) => {
  return (
    <section className={`bg-gray section-content`}>
      <SectionTitle>{title}</SectionTitle>
      <div className={`section-center`}>
        {projects.map(project => {
          return <Project key={project.strapiId} {...project} />
        })}
      </div>
      {moreLink && (
        <Link to="/projects" className="btn action-button">
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
