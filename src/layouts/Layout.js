import React from "react"
import Header from "./Header/Header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>test</div>
      <main>{children}</main>
    </>
  )
}

export default Layout
