import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"
import { Link } from "gatsby"
// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import animationData from "../../lotties/eg-lottie.json"

// 👇 this fucking works
const EyeLottie = ({ speed = 1 }) => {
  const [stopped, setStopped] = useState(false)

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  useEffect(() => {
    setStopped(prev => !prev)
  }, [speed])

  return (
    <div>
      <Lottie
        isStopped={stopped}
        speed={speed}
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
          New chapter every 2 weeks
        </h3>
        <p style={{ color: "var(--color-yellow-0)" }}>
          I announce new chapters on my Twitter and Dribble.
        </p>
      </div>
    </li>
  )
}

// Maybe what you can do here is just change state on hover and that gets rerendered right?
// You have installed lottie web haven't you

const ChapterClicker = ({ number, name, link = "#" }) => {
  const [lottieSpeed, setLottieSpeed] = useState(1)

  const handleOnMouseEnter = e => {
    setLottieSpeed(2)
  }

  const handleOnMouseLeave = e => {
    setLottieSpeed(-2)
  }

  return (
    <li
      className="chapter-list__item"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Link to={link}>
        <div>
          <span className="chapter-list__item__chapter-number">
            Chapter {number}
          </span>
          <span className="chapter-list__item__chapter-name">{name}</span>
        </div>
        <div>
          <EyeLottie speed={lottieSpeed} />
        </div>
      </Link>
    </li>
  )
}

ChapterClicker.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ChapterClicker
