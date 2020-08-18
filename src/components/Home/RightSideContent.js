import React, { useEffect, useContext, useState } from "react"
import { motion } from "framer-motion"

import heroineImage from "../../assets/images/heroine.png"

import { ScrollContext } from '../../pages/index'

const RightSideContent = () => {

  const [scrollContext, setScrollContext]= useContext(ScrollContext)

  const onSectionScroll = (e) => {
    setScrollContext(e.target.scrollTop);
  }

  return (
    <section className="home-page__right" onScroll={onSectionScroll}>
      <section className="home-page__right__hero">
        <motion.img
          src={heroineImage}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ ease: [0, 0.71, 0.15, 1.03] }}
        />
      </section>
      <section className="home-page__right__rest">
        <h1>What the fuck</h1>
      </section>
    </section>
  )
}

export default RightSideContent
