import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"
import "@lottiefiles/lottie-player"
import { Link } from "gatsby"
// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import Spacer from "../Spacer"

import eyeLottieData from "../../lotties/eg-lottie.json"
import backToHomeLottieData from "../../lotties/backToHome.json"

// Icon imports
import HomeIcon from "../../assets/icons/32x32/home.inline.svg"

// 👇 this fucking works
const IconLottie = ({ speed = 1, animationData }) => {
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
        <Spacer height="sp_base" />
        <p style={{ color: "var(--color-yellow-0)" }}>
          I announce new chapters on my <a href="https://twitter.com/nashvail" target="__blank">Twitter</a>and <a target="__blank" href="https://dribbble.com/nashvail">Dribbble</a>.
        </p>
      </div>
    </li>
  )
}

// Maybe what you can do here is just change state on hover and that gets rerendered right?
// You have installed lottie web haven't you

const ChapterClicker = ({ number, name, link = "#", home }) => {
  const [lottieSpeed, setLottieSpeed] = useState(1)

  const handleOnMouseEnter = e => {
    setLottieSpeed(2)
  }

  const handleOnMouseLeave = e => {
    setLottieSpeed(-2)
  }

  const mainClassName = home ? "chapter-list__item--home" : "chapter-list__item";

  return (
    <li className={mainClassName}>
      <Link
        to={link}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div>
          <span className="chapter-list__item__chapter-number">
            {typeof number === 'number' ? `Chapter ${number}` : number}
          </span>
          <span className="chapter-list__item__chapter-name">{name}</span>
        </div>
        <div>
          <IconLottie animationData={home ? backToHomeLottieData : eyeLottieData} speed={lottieSpeed} />
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
