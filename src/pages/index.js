import React, { useState } from "react"
import { Link } from "gatsby"

import LeftSideContent from "../components/Home/LeftSideContent"
import RightSideContent from "../components/Home/RightSideContent"
import SEO from "../components/seo"

// SCSS
import "../assets/scss/index.scss"

export const RightSideScrollContext = React.createContext()

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <main className="home-page">
        <LeftSideContent />
        <RightSideContent />
      </main>
    </>
  )
}

export default IndexPage
