import React, { useEffect, useLayoutEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Images
import heroImage from "../assets/images/hero-chapter-0.png"

let Splitting
if(typeof window !== `undefined`) {
  Splitting = require("splitting")
}

export default ({ children }) => (
  <AnimatePresence>
    <main className="chapter-view">
      <section className="chapter-view__hero">
        <h3>Chapter 0</h3>
        <h1 className="chapter-view__title">INTRODUCTION</h1>
        <motion.img
          src={heroImage}
          transition={{ ease: [0, 0.71, 0.15, 1.03] }}
          initial={{ y: 200 }}
          animate={{ y: 0 }}
        />
      </section>
      <article className="chapter-view__content">{children}</article>
    </main>
  </AnimatePresence>
)
