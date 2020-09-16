import React, { useEffect, useLayoutEffect, useRef, useContext } from "react"
import { motion } from "framer-motion"

import ChapterClicker from "./ChapterClicker"
import { RightSideScrollContext } from "../../pages/index"

// Chapter Data
import chapters from "../../data/chapters.json"

// Image imports
import donut1 from "../../assets/images/donut-1.svg"

// Icon imports
import IndexIcon from "../../assets/icons/32x32/index-yellow.inline.svg"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

// Renders the list of chapters
const Chapters = () => {
  return (
    <ol className="home-page__left__chapter-list">
      {chapters.map((chapterData, key) => (
        <ChapterClicker
          link={chapterData.link}
          name={chapterData.chapterName}
          number={chapterData.chapterNumber}
        />
      ))}
    </ol>
  )
}


const LeftSideContent = () => {
  const sectionRef = useRef(null)

  // Scroll position from right side component
  const [scrollContext, setScrollContext] = useContext(RightSideScrollContext)

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

  // Move 1/5th of whatever the right section is being scrolled
  useEffect(() => {
    // Comment the line below if you don't want left side section to scroll
    // along with the right section but then also delete the wrappign contexts
    // sectionRef.current.scrollTo(0, scrollContext/5);
  }, [scrollContext])

  return (
    <motion.section
      className="home-page__left"
      ref={sectionRef}
      // initial={{ x: -100 }}
      // animate={{ x: 0 }}
      // transition={{ ease: [0, 0.71, 0.15, 1.03] }}
    >
      <img src={donut1} className="home-page__left__donut1" />
      <span className="home-page__left__flap" />
      <h1 className="home-page__left__title" data-splitting>
        <span className="home-page__left__title--word-one">loving</span>
        <br />
        <span className="home-page__left__title--word-two">recursion</span>
      </h1>
      <p style={{ color: "var(--color-grey-5)", width: "80%" }}>
        A book about learning to love recursion. Written in English and
        JavaScript
      </p>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "32px auto",
          gridGap: "1rem",
          alignItems: "center",
        }}
      >
        <IndexIcon style={{ marginTop: "7px" }} />{" "}
        <h3 style={{ color: "var(--color-yellow-4)" }}>Index</h3>
      </div>

      <Chapters />
    </motion.section>
  )
}

export default LeftSideContent
