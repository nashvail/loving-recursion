import React, { useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useMediaQuery } from 'react-responsive'

// Local imports
import ChapterEnd from "../components/ChapterEnd"
import Spacer from "../components/Spacer"
import InlineSideBar from "../components/InlineSidebar"
import MobileSidebar from "../components/MobileSidebar"
import SEO from "../components/seo";

// Import constants
import { TRANSITION_EASE } from "../constants"

// Break Points
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1200 })
  return isMobile ? children : null
}


const ChapterNumber = ({ chapterNumber }) => (
  <h3 className="chapter-view__number">
    <span
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
    >
      Chapter {chapterNumber}
    </span>
  </h3>
)

// Number of words after which we're supposed to shove in a <br/> tag
const CHAPTER_BREAKS = [-1, -1, 2, 2]

const ChapterTitle = ({ addBreakAfter, text }) => {
  if (addBreakAfter === -1) {
    return (
      <h1 className="chapter-view__title">
        <span
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
        >
          {text}
        </span>
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
          <span
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
          >
            {sentence1.join(" ")}
          </span>
        </span>
        <span
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ ease: TRANSITION_EASE, delay: 0.2 }}
        >
          {sentence2.join(" ")}
        </span>
      </h1>
    )
  }
}

const HeroImage = ({ chapterNumber }) => (
  <LazyLoadImage
      alt="Hero image"
      src={require(`../assets/images/chapter-heroes/${chapterNumber}.png`)}
      placeholderSrc={require(`../assets/images/chapter-heroes/placeholders/${chapterNumber}.jpg`)}
      effect="blur"
  />
)

export const SidebarOpenContext = React.createContext()

export default ({ children, pageContext }) => {
  const chapterNumber = pageContext.frontmatter.number,
    chapterName = pageContext.frontmatter.name

  const isSmallDevice = useMediaQuery({ maxWidth: 1200 });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const desktopHeroElements = (
    <section className="chapter-view__hero">
      <ChapterNumber chapterNumber={chapterNumber} />
      <Spacer height="sp_md" />
      <ChapterTitle
        addBreakAfter={CHAPTER_BREAKS[chapterNumber]}
        text={chapterName}
      />
      <Spacer height="sp_xxl" />
      <HeroImage chapterNumber={chapterNumber} />
    </section>
  )

  const tabletHeroElements = (
    <section className="chapter-view__hero">
      <HeroImage chapterNumber={chapterNumber} />
      <Spacer height="sp_xxl" />
      <ChapterNumber chapterNumber={chapterNumber} />
      <Spacer height="sp_base" />
      <ChapterTitle
        addBreakAfter={CHAPTER_BREAKS[chapterNumber]}
        text={chapterName}
      />
    </section>
  )

  return (
    <>
      <SEO title={`Chapter ${chapterNumber} - ${chapterName}`} />
      <SidebarOpenContext.Provider value={[isSidebarOpen, setIsSidebarOpen]}>
        <Mobile><MobileSidebar currentChapter={chapterNumber} /></Mobile>
        <Desktop><InlineSideBar currentChapter={chapterNumber}/></Desktop>
        <main className="chapter-view">
          {isSmallDevice ? tabletHeroElements : desktopHeroElements}
          <section className="chapter-view__content">
            <article>{children}</article>
          </section>
          <ChapterEnd nextChapterNumber={chapterNumber + 1} />
        </main>

      </SidebarOpenContext.Provider>
    </>
  )
}
