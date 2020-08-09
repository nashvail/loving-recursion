import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"

import animationData from "../../lotties/eg-lottie.json"

// 👇 this fucking works
const EyeLottie = ({ stopped, speed=1 }) => {
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

  const [lottieStopped, setLottieStopped] = useState({stopped: true, speed: 1})

  const handleOnMouseEnter = (e) => {
    setLottieStopped({stopped: false, speed: 2});
  }

  const handleOnMouseLeave = (e) => {
    setLottieStopped({stopped: false, speed: -2.25});
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
          <EyeLottie stopped={lottieStopped.stopped} speed={lottieStopped.speed} />
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
