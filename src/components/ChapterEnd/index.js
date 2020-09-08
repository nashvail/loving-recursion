import React from "react"
import PropTypes from "prop-types"

const ChapterEnd = ({ nextChapterNumber }) => {
  return (
    <section className="chapter-end">
      <div className="chapter-end__next-chapter"></div>
      <footer>Please read chapter {nextChapterNumber}</footer>
    </section>
  )
}

ChapterEnd.propTypes = {
  nextChapterNumber: PropTypes.number.isRequired
}

export default ChapterEnd
