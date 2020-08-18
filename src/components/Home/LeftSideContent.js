import React, { useEffect, useLayoutEffect, useRef, useContext } from "react"
import { motion } from "framer-motion"

import ChapterClicker from "./ChapterClicker"
import { ScrollContext } from "../../pages/index"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

const LeftSideContent = () => {
  const sectionRef = useRef(null);

  // Scroll position from right side component
  const [scrollContext, setScrollContext] = useContext(ScrollContext)

  useLayoutEffect(() => {
    Splitting({ by: "words" })
  })

  useEffect(() => {
    if (typeof window === "undefined") return null
    const title = document.querySelector(".home-page__left__title")

    setTimeout(() => {
      title.classList.add("show")
    }, 175)

    return () => {
      title.classList.remove("show")
    }
  }, [])

  useEffect(() => {
    sectionRef.current.scrollTo(0, scrollContext/5);
  }, [scrollContext])

  return (
    <motion.section
      className="home-page__left"
      ref={sectionRef}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ ease: [0, 0.71, 0.15, 1.03] }}
    >
      <h1 className="home-page__left__title" data-splitting>
        <span className="home-page__left__title--word-one">loving</span>
        <br />
        <span className="home-page__left__title--word-two">recursion</span>
      </h1>
      <h2 style={{ color: "white" }}>Table Of Content</h2>
      <ol className="home-page__left__chapter-list">
        <ChapterClicker number={0} name="Introduction" link="/introduction" />
        <ChapterClicker number={1} name="The Encounter" />
        <ChapterClicker number={2} name="Then Comes Trust" />
        <ChapterClicker number={3} name="Procedures and Patterns" />
        <ChapterClicker number={4} name="Chasing Cars, Drawing Triangles" />
      </ol>
    </motion.section>
  )
}

export default LeftSideContent
