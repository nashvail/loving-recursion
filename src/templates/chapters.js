import React, { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProgressiveImage from "react-progressive-image"
import "@lottiefiles/lottie-player"

// Local imports
import ChapterEnd from "../components/ChapterEnd"
import Spacer from "../components/Spacer"
import InlineSideBar from "../components/InlineSidebar"
// Can't use this in the lottie yet it's only accepting URL json
import HamburgerLottieJson from "../lotties/hamburgerLottie.json"

// Import constants
import { TRANSITION_EASE } from "../constants"

/**
 * Hamburger Lottie
 */
const HamburgerLottie = ({ onClick, style }) => {
  const lottieRef = useRef(null)

  const handleMouseEnter = () => {
    lottieRef.current.setSpeed(1)
    lottieRef.current.setDirection(1)
    lottieRef.current.play()
  }

  const handleMouseLeave = () => {
    lottieRef.current.setSpeed(-3)
    // lottieRef.current.setDirection(-1);
    lottieRef.current.play()
  }

  return (
    <button
      className="chapter-view__ham"
      tabIndex="1"
      onClick={onClick}
      style={style}
    >
      <lottie-player
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={lottieRef}
        src="https://assets4.lottiefiles.com/private_files/lf30_W9OT35.json"
        style={{ width: "64px", height: "64px" }}
      ></lottie-player>
    </button>
  )
}

// Number of words after which we're supposed to shove in a <br/> tag
const CHAPTER_BREAKS = [-1, -1, 2, 2]

const Title = ({ addBreakAfter, text }) => {
  if (addBreakAfter === -1) {
    return (
      <h1 className="chapter-view__title">
        <motion.span
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
        >
          {text}
        </motion.span>
      </h1>
    )
  } else {
    // Split it into words
    const words = text.split(" ")
    const sentence1 = words.slice(0, addBreakAfter)
    const sentence2 = words.slice(addBreakAfter)
    return (
      <h1 className="chapter-view__title">
        <span style={{ overflow: "hidden" }}>
          <motion.span
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
          >
            {sentence1.join(" ")}
          </motion.span>
        </span>
        <br />
        <motion.span
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
        >
          {sentence2.join(" ")}
        </motion.span>
      </h1>
    )
  }
}

export const SideBarOpenContext = React.createContext()

export default ({ children, pageContext }) => {
  const chapterNumber = pageContext.frontmatter.number,
    chapterName = pageContext.frontmatter.name

  const [isSideBarOpen, setIsSidebarOpen] = useState(false)

  const toggleSideBar = _ => setIsSidebarOpen(!isSideBarOpen)

  return (
    <>
      <SideBarOpenContext.Provider value={[isSideBarOpen, setIsSidebarOpen]}>
        <InlineSideBar currentChapter={chapterNumber} />
        <main className="chapter-view">
          <HamburgerLottie
            style={{ transform: `translateX(${isSideBarOpen ? "65rem" : 0})` }}
            onClick={toggleSideBar}
          />
          <section className="chapter-view__hero">
            <h3 className="chapter-view__number">
              <motion.span
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
              >
                Chapter {chapterNumber}
              </motion.span>
            </h3>
            <Spacer height="sp_base" />
            <Title
              addBreakAfter={CHAPTER_BREAKS[chapterNumber]}
              text={chapterName}
            />
            <Spacer height="sp_xxl" />
            <ProgressiveImage
              src={require(`../assets/images/chapter-heroes/${chapterNumber}.png`)}
            >
              {src => (
                <motion.img
                  src={src}
                  transition={{ ease: TRANSITION_EASE, delay: 0.1 }}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  alt={`Chapter ${chapterNumber} hero image`}
                />
              )}
            </ProgressiveImage>
          </section>
          <section className="chapter-view__content">
            <article>{children}</article>
          </section>
          <ChapterEnd nextChapterNumber={chapterNumber + 1} />
        </main>
      </SideBarOpenContext.Provider>
    </>
  )
}
