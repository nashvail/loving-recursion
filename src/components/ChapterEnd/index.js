import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import ProgressiveImage from "react-progressive-image"

// Image imports
import footer_art from "../../assets/images/footer_art.png"

const ChapterEnd = ({ nextChapterNumber }) => {
  return (
    <section className="chapter-end">
      <div className="chapter-end__next-chapter">
        <h4>Next Chapter</h4>
        <h3>Chapter Name</h3>
        <ProgressiveImage
          src={require(`../../assets/images/chapter-heroes/${nextChapterNumber}.png`)}
        >
          {src => (
            <motion.img src={src} alt={`Chapter ${nextChapterNumber} hero image`} />
          )}
        </ProgressiveImage>
      </div>
      <footer className="footer">
        <div className="footer__left">
            <h3>By Nash Vail</h3>
        </div>
        <div className="footer__right">
          <img src={footer_art}/>
        </div>
      </footer>
    </section>
  )
}

ChapterEnd.propTypes = {
  nextChapterNumber: PropTypes.number.isRequired,
}

export default ChapterEnd
