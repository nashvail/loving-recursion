import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import ProgressiveImage from "react-progressive-image"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'

// Local imports
import ChapterClicker from "../Home/ChapterClicker"
import Spacer from "../Spacer"
import Footer from "../Footer"

// Image imports
import footer_art from "../../assets/images/footer_art.png"

// Chapter Data
import chapters from "../../data/chapters.json"

const ChapterEnd = ({ nextChapterNumber = 0, onHome = false }) => {

  // Media queries
  const isDesktop = useMediaQuery({ minWidth: 1200 })

  let sectionClassName = onHome ? 'home-page__right__end__content' : 'chapter-end';

  const isNextChapterPublished = chapters[nextChapterNumber]['published'];

  return (
    <section className={sectionClassName}>
      { (isDesktop && isNextChapterPublished) &&
        <Link
          to={chapters[nextChapterNumber]["link"]}
          className="chapter-end__next-chapter"
        >
          <h4>{`${onHome ? 'Start Here' : 'Next Chapter'}`}</h4>
          <h3>{chapters[nextChapterNumber]["chapterName"]}</h3>
          <ProgressiveImage
            src={require(`../../assets/images/chapter-heroes/${nextChapterNumber}.png`)}
          >
            {src => (
              <motion.img
                src={src}
                alt={`Chapter ${nextChapterNumber} hero image`}
              />
            )}
          </ProgressiveImage>
        </Link>
      }
      {
        (!isDesktop && !onHome && isNextChapterPublished) &&
        <>
          <ChapterClicker number="Next Chapter" name={chapters[nextChapterNumber]["chapterName"]} link={chapters[nextChapterNumber]["link"]} published={true} /> {/* The isNextChapterPublished already has a check above so published will be true here anyway*/}
          <Spacer height="sp_lg" />
        </>
      }
      <Footer/>
    </section>
  )
}

ChapterEnd.propTypes = {
  nextChapterNumber: PropTypes.number.isRequired,
}

export default ChapterEnd
