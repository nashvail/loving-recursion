import React from "react"
import { motion } from "framer-motion"

import heroineImage from "../../assets/images/heroine.png"

const RightSideContent = () => (
  <section className="home-page__right">
    <section className="home-page__right__hero">
      <motion.img src={heroineImage} initial={{ y: 100 }} animate={{ y: 0 }} transition={{ ease : [0, 0.71, 0.15, 1.03] }} />
    </section>
    <section className="home-page__right__rest">
      <h1>What the fuck</h1>
    </section>
  </section>
)

export default RightSideContent
