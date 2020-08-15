import React from "react";
import { motion } from "framer-motion"

import heroImage from "../assets/images/hero-chapter-0.png";

export default ({ children }) => (
  <main className="chapter-view">
    <section className="chapter-view__hero">
      <h2>LOVING RECURSION</h2>
      <h2>CHAPTER 0.</h2>
      <h1>INTRODUCTION</h1>
      <img src={heroImage} />
    </section>
    <article className="chapter-view__content">
      {children}
    </article>
  </main>
)
