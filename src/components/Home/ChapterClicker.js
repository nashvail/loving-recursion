import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"
import { Link } from "gatsby"
import { useMediaQuery } from 'react-responsive'

import Spacer from "../Spacer"
import { BREAKPOINTS } from '../../constants'

import eyeLottieData from "../../lotties/eg-lottie.json"

const IconLottie = ({ direction, animationData }) => {
  // Hooks
  const lottieRef = useRef(null)
  const [speed, setSpeed] = useState(1)
  const [stopped, setIsStopped] = useState(true)

  const playForward = () => {
    setIsStopped(false);
    setSpeed(2);
    lottieRef.current.play();
  }

  const playBackward = () => {
    setIsStopped(false);
    setSpeed(-3);
    lottieRef.current.play();
  }

  useEffect(() => {
    if (direction === 1) playForward();
    else if (direction === 2) playBackward();
    else console.log('CANT IDENTIFY');
  }, [direction])

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div>
      <Lottie
        speed={speed}
        isStopped={stopped}
        ref={lottieRef}
        options={defaultOptions}
        height={32}
        width={32}
      />
    </div>
  )
}

export const ChapterAnnouncement = () => {
  return (
    <li className="chapter-list__inter">
      <div>
        <h3 style={{ color: "var(--color-blue-0)" }}>
          Chapters below are being written
        </h3>
        <Spacer height="sp_base" />
        <p style={{ color: "var(--color-yellow-0)" }}>
          I announce new chapters on my <a href="https://twitter.com/nashvail" target="__blank">Twitter </a>and <a target="__blank" href="https://dribbble.com/nashvail">Dribbble</a>.
        </p>
      </div>
    </li>
  )
}

const ChapterClicker = ({ number = -1, name = "Demo chapter", link = "#", published }) => {

  // 1 is forward, 2 is backward, 0 is no direction
  const [lottieDirection, setLottieDirection] = useState(0)

  // Media query hooks
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS['large_desktop'] })

  const handleOnMouseEnter = e => {
    setLottieDirection(1);
  }

  const handleOnMouseLeave = e => {
    setLottieDirection(2);
  }

  const mainClassName = published ? "chapter-list__item" : "chapter-list__item--disabled";

  return (
    <li className={mainClassName}>
      <Link
        to={link}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div>
          <h4 className="chapter-list__item__chapter-number">
            {/* Show Coming Soon for not published chapters */}
            {typeof number === 'number' ? `Chapter ${number}` : number}
          </h4>
          <span className="chapter-list__item__chapter-name">{name}</span>
        </div>
        <div>
          {isDesktop && <IconLottie animationData={eyeLottieData} direction={lottieDirection} />}
        </div>
      </Link>
    </li>
  )
}

ChapterClicker.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ChapterClicker
