import React, { useState } from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar/Sidebar"
import "./layout.css"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => {
    setOpen(!open)
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
