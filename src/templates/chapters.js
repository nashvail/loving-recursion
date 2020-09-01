import React, { useEffect, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { graphql } from "gatsby"
import ProgressiveImage from "react-progressive-image"

import testSrc from "../assets/images/chapter-heroes/0.png"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

export default ({ children, pageContext }) => {
  const chapterNumber = pageContext.frontmatter.number,
    chapterName = pageContext.frontmatter.name;

  useLayoutEffect(() => {
    Splitting({ by: "lines" })
  })

  useEffect(() => {
    if (typeof window === "undefined") return null
    const title = document.querySelector(".chapter-view__title")

    setTimeout(() => {
      title.classList.add("show")
    }, 175)

    return () => {
      title.classList.remove("show")
    }
  }, [])

  return (
    <main className="chapter-view">
      <section className="chapter-view__hero">
        <h3 className="chapter-view__number">Chapter {chapterNumber}</h3>
        <h1 className="chapter-view__title">
          {chapterName}
        </h1>
        <ProgressiveImage src={require(`../assets/images/chapter-heroes/${chapterNumber}.png`)}>
          {src => (
             <motion.img
             src={src}
             transition={{ ease: [0, 0.71, 0.15, 1.03] }}
             initial={{ y: 200 }}
             animate={{ y: 0 }}
             alt={`Chapter ${chapterNumber} hero image`}
           />
          )}
        </ProgressiveImage>
       
      </section>
      <section className="chapter-view__content">
        <article>
            {children}
        </article>
      </section>
    </main>
  )
}
