import React, { useEffect, useContext, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import Lottie from "react-lottie"
import MediaQuery, { useMediaQuery } from 'react-responsive'
import LocomotiveScroll from "locomotive-scroll"

// Local imports
import Spacer from "../Spacer"
import heroineImage from "../../assets/images/head.png"
import heroineImage2 from "../../assets/images/head-small.png"
import { RightSideScrollContext } from "../../pages/index"
import Praise from "./Praise"
import ChapterEnd from "../ChapterEnd"
import ChapterClicker from "./ChapterClicker"

// Lottie imports
import circleFrontData from "../../lotties/circleExpand.json"
import circleFrontData2 from "../../lotties/circleExpand2.json"

// Icon/Images imports
import IndexIcon from "../../assets/icons/32x32/index-yellow.inline.svg"
import donut1 from "../../assets/images/donut-1.svg";

// Data imports
import chapters from "../../data/chapters.json"

// The index section that comes when in tablet or mobile view
export const ResponsiveIndex = () => {

  return (
    <>
      <section className="home-page__right__index-resp">
        <h3 style={{ color: "var(--color-yellow-4)", textAlign: "center" }}>Index</h3>
        {/* Spacer */}
        <Spacer height="sp_lg" />
        <ul style={{ listStyle: "none", margin: "0" }}>
          {chapters.map(({ chapterName, chapterNumber, link }) => (
            <ChapterClicker name={chapterName} number={chapterNumber} link={link} />
          ))}
        </ul>
      </section>
      <Spacer height="sp_xl" />
    </>
  );

}

const ResponsiveHeader = () => {
  // Media queries
  const isDesktop = useMediaQuery({ minWidth: 1500 })
  const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 1500 })
  const isPhone = useMediaQuery({ maxWidth: 800 })

  return (
    <section className="home-page__right__header-resp">
      <div className="home-page__right__header-resp__title">
        <span className="home-page__right__header-resp__title__flap" />
        <h1>LOVING RECURSION</h1>
        {!isPhone && (<><Spacer height="sp_sm" />
          <p>A book about learning to love recursion. Written in English and JavaScript</p></>)}
      </div>
      <Spacer height="sp_xl" />
      {!isPhone && <img src={donut1}
        alt="Decorational donut"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-150px'
        }}
      />}
    </section>
  )
}

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
        height={height + "%"}
        width={width + "%"}
      />
    </div>
  )
}

const RightSideContent = () => {
  const [scrollContext, setScrollContext] = useContext(RightSideScrollContext)
  const scrollRef = React.createRef()

  // Media queries
  const isBigScreen = useMediaQuery({ query: '(min-width: 1500px)' })
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1500px)' })

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: false,
    })

    return () => {
      scroll.destroy()
    }
  }, [])

  const onSectionScroll = e => {
    setScrollContext(e.target.scrollTop)
  }

  return (
    <section className="home-page__right" ref={scrollRef} data-scroll data-scroll-container>
      { isSmallScreen && <ResponsiveHeader />}
      {/* Hero Section */}
      <section className="home-page__right__hero" data-scroll data-scroll-section>
        {
          isBigScreen ?
            <>
              <CircleExpandLottieFront
                width={90}
                height={90}
                className="home-page__right__hero__lottie-1"
                animationData={circleFrontData}
              />
              <img
                src={heroineImage}
                className="home-page__right__hero__desk-heroine"
                data-scroll
                data-scroll-speed="1"
                data-scroll-position="top"
              />
              <CircleExpandLottieFront
                width={80}
                height={80}
                className="home-page__right__hero__lottie-2"
                animationData={circleFrontData2}
              />
            </>
            :
            <>
              <img
                src={heroineImage2}
                className="home-page__right__hero__mobile-heroine"
              />
            </>
        }
      </section>
      {/* Index section for responsive view */}
      { isSmallScreen && <ResponsiveIndex />}
      {/* Intro Section */}
      <section
        className="home-page__right__intro"
        data-scroll
        data-scroll-section
      >
        <h1>
          <span style={{ color: "var(--color-yellow-4)" }}>WHY</span>
          <br /> THE BOOK?
        </h1>
        <Spacer height="sp_lg" />
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
      <Spacer height="sp_xxl" />
      {/* Praise Section  */}
      <section className="home-page__right__praise"
        data-scroll
        data-scroll-section
      >
        <h1>
          {" "}
          <span style={{ color: "var(--color-yellow-4)" }}>
            A LITTLE
            </span>{" "}
          <br /> BIT OF PRAISE
          </h1>
        <Spacer height="sp_lg" />
        <Praise />
      </section>
      {/* Footer + Chapter End section */}
      <Spacer height="sp_xxl" />
      <Spacer height="sp_xxl" />
      <section className="home-page__right__end"
        data-scroll
        data-scroll-speed="3"
        data-scroll-section
        data-scroll-position="bottom" >
        <ChapterEnd onHome />
      </section>
    </section>
  )
}

export default RightSideContent
