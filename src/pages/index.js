import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

import LeftSideContent from "../components/Home/LeftSideContent"
import RightSideContent from "../components/Home/RightSideContent"

// SCSS
import "../assets/scss/index.scss"

const IndexPage = () => {
  return (
    <main className="home-page">
      <LeftSideContent/>
      <RightSideContent/>
    </main>
 )
}

export default IndexPage
