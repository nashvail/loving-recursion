import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"


import LeftSideContent from "../components/Home/LeftSideContent"
import RightSideContent from "../components/Home/RightSideContent"

// SCSS
import "../assets/scss/index.scss"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

const IndexPage = () => {
  useLayoutEffect(() => {
    Splitting({ by: "words" });
  })

  return (
    <main className="home-page">
      <LeftSideContent/>
      <RightSideContent/>
    </main>
 )
}

export default IndexPage
