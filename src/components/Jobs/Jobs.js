import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from "../SectionTitle/SectionTitle"
import styles from "./jobs.module.css"

const Jobs = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
        nodes {
          Company
          Date
          Position
          Work {
            Description
            id
          }
          strapiId
        }
      }
    }
  `)

  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const [jobIndex, setJobIndex] = useState(0)
  const { Company, Date, Position, Work } = jobs[jobIndex]

  return (
    <section className="bg-white section-content">
      <SectionTitle>Experience</SectionTitle>
      <div className={`section-center ${styles.jobs}`}>
        <div className={styles.jobsActions}>
          {jobs.map((job, i) => (
            <button key={job.strapiId} onClick={() => setJobIndex(i)}>
              {job.Company}
            </button>
          ))}
        </div>
        <div className={styles.jobsInfo}>
          <div>{Position}</div>
          <div>{Company}</div>
          <div>{Date}</div>
          <ul>
            {Work.map(w => (
              <li key={w.id}>{w.Description}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Jobs
