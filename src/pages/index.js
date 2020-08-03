import React, { useLayoutEffect } from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

import Layout from "../components/layout"
import ChapterClicker from "../components/chapter_clicker"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

const IndexPage = () => {
  useLayoutEffect(() => {
    Splitting({ by: "words" });
  })

  return (
    <Layout>
      <h1 data-splitting>Hello There How are You Doing?</h1>
      <div className="testing"></div>
      <ChapterClicker/>
    </Layout>
  )
}

export default IndexPage
