import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle"
import { ServicesData } from "../../constants/services"
import styles from "./services.module.css"

const Services = () => {
  return (
    <section className={`bg-gray section-content`}>
      <SectionTitle>SERVICES</SectionTitle>
      <div className={`section-center ${styles.services}`}>
        {ServicesData.map(service => (
          <div className={styles.serviceSingle} key={service.id}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
