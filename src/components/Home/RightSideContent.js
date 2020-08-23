import React, { useEffect, useContext, useState } from "react"
import { motion } from "framer-motion"
import Lottie from "react-lottie"

// Local imports
import heroineImage from "../../assets/images/head.png"
import { RightSideScrollContext } from "../../pages/index"
/// Lottie
import circleFrontData from "../../lotties/circleExpand.json"
import circleFrontData2 from "../../lotties/circleExpand2.json"

// Lottie
const CircleExpandLottieFront = ({
  className,
  width,
  height,
  animationData,
}) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div className={className}>
      <Lottie
        isStopped={false}
        speed={1}
        options={defaultOptions}
        height={width}
        width={height}
      />
    </div>
  )
}

const RightSideContent = () => {
  const [scrollContext, setScrollContext] = useContext(RightSideScrollContext)

  const onSectionScroll = e => {
    setScrollContext(e.target.scrollTop)
  }

  return (
    <section className="home-page__right" onScroll={onSectionScroll}>
      <section className="home-page__right__hero">
        <CircleExpandLottieFront
          width={380}
          height={380}
          className="home-page__right__hero__lottie-1"
          animationData={circleFrontData}
        />
        <img src={heroineImage} />
        <CircleExpandLottieFront
          width={200}
          height={200}
          className="home-page__right__hero__lottie-2"
          animationData={circleFrontData2}
        />
      </section>
      <section className="home-page__right__rest">
        <h2>Why is this Book?</h2>
        <p>
          This book is because one day an article about recursion that I was
          writing got too long and too deep to be called just an article. See
          this project as a collection of articles on the same topic or, a
          “book”, if you want me to feel better and more pompous than I already
          do; now that I have finished a project I thought I never would. This
          book is also a test of my ideas on teaching philosophy that I have
          come up with after some amount of pondering, about 10% more than a
          normal human would. More details about this in the Introduction
          chapter.
        </p>
      </section>
    </section>
  )
}

export default RightSideContent
