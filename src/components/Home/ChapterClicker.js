import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"

import animationData from "../../lotties/eg-lottie.json"

// 👇 this fucking works
const EyeLottie = ({ speed=1 }) => {

  const [stopped, setStopped] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  useEffect(() => {
    setStopped(prev => !prev) ;
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

// Maybe what you can do here is just change state on hover and that gets rerendered right?
// You have installed lottie web haven't you

const ChapterClicker = ({ number, name, link }) => {

  const [lottieSpeed, setLottieSpeed] = useState(1)

  const handleOnMouseEnter = (e) => {
    setLottieSpeed(2);
  }

  const handleOnMouseLeave = (e) => {
    setLottieSpeed(-2);
  }
  
  return (
    <li className="chapter-list__item" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <a href="#">
        <div>
          <span
            style={{
              fontFamily: "GT Eesti Pro Text-Regular",
              fontSize: "20px",
              display: "block",
              color: "#75AAB3",
            }}
          >
            Chapter {number}
          </span>
          <span
            style={{
              fontFamily: "GT America-Expanded Medium",
              fontSize: "30px",
              color: "#112d32",
            }}
          >
            {name}
          </span>
        </div>
        <div>
          <EyeLottie speed={lottieSpeed} />
        </div>
      </a>
    </li>
  )
}

ChapterClicker.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ChapterClicker
