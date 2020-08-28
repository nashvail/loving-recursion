import React, { useEffect, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { graphql } from 'gatsby'

// Images
import heroImage from "../assets/images/hero-chapter-12.png"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require("splitting")
}

export default ({ children, pageContext }) => {

  const {number, name} = pageContext.frontmatter

  useLayoutEffect(() => {
    Splitting({ by: 'lines'})
  })

  useEffect(() => {
    if (typeof window === "undefined") return null
    const title = document.querySelector('.chapter-view__title')

    setTimeout(() => {
      title.classList.add('show') 
    }, 175);

    return () => {
      title.classList.remove('show')
    }
  }, [])

  console.log(name, number);

  return (
    <main className="chapter-view">
      <section className="chapter-view__hero">
        <h3 className="chapter-view__number">Chapter {number}</h3>
        <h1 className="chapter-view__title" data-splitting>
          {name}
        </h1>
        <motion.img
          src={heroImage}
          transition={{ ease: [0, 0.71, 0.15, 1.03] }}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
        />
      </section>
      <article className="chapter-view__content">{children}</article>
    </main>
  )
}
