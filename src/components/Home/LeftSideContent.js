import React, { useEffect, useLayoutEffect, useRef, useContext } from "react"
import { motion } from "framer-motion"

import ChapterClicker from "./ChapterClicker"
import { RightSideScrollContext } from "../../pages/index"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

const LeftSideContent = () => {
  const sectionRef = useRef(null);

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
      <span className="home-page__left__flap"/>
      <h1 className="home-page__left__title" data-splitting>
        <span className="home-page__left__title--word-one">loving</span>
        <br />
        <span className="home-page__left__title--word-two">recursion</span>
      </h1>
      <p style={{ color: 'white' }}>A book about learning to love recursion. Written in English and JavaScript</p>
      <br/>
      <h3 style={{ color: 'var(--color-grey-4)'}}>Index</h3>
      <ol className="home-page__left__chapter-list">
        <ChapterClicker number={0} name="Introduction" link="/introduction" />
        <ChapterClicker number={1} name="The Encounter" link="/the_encounter" />
        <ChapterClicker number={2} name="Then Comes Trust" />
        <ChapterClicker number={3} name="Procedures and Patterns" />
        <ChapterClicker number={4} name="Chasing Cars, Drawing Triangles" />
      </ol>
    </motion.section>
  )
}

export default LeftSideContent
