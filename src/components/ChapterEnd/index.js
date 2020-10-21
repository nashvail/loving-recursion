import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import ProgressiveImage from "react-progressive-image"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'

// Image imports
import footer_art from "../../assets/images/footer_art.png"

// Chapter Data
import chapters from "../../data/chapters.json"

const ChapterEnd = ({ nextChapterNumber = 0, onHome = false }) => {

  // Media queries
  const isDesktop = useMediaQuery({ minWidth: 1500 })
  const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 1500 })
  const isPhone = useMediaQuery({ maxWidth: 800 })

  let sectionClassName = onHome ? 'home-page__right__end__content' : 'chapter-end';

  console.log('onHome', onHome);
  console.log('isDesktop', isDesktop);

  return (
    <section className={sectionClassName}>
      { ((onHome && isDesktop) || (!onHome)) &&
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
      <footer className="footer">
        <div className="footer__left">
          <div>
            <h3>By Nash Vail</h3>
            <ul className="footer__left__links">
              <li>
                <a href="#">
                  <h4>Tweet a Feedback</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Support</h4>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>Contribute</h4>
                </a>
              </li>
            </ul>
          </div>
          <h4>License: <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="__blank">CC BY-NC-SA</a></h4>
        </div>
        <div className="footer__right">
          <img src={footer_art} />
        </div>
      </footer>
    </section>
  )
}

ChapterEnd.propTypes = {
  nextChapterNumber: PropTypes.number.isRequired,
}

export default ChapterEnd
