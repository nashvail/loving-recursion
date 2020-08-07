import React from "react"
import PropTypes from "prop-types"

const ChapterClicker = ({ number, name, link }) => (
  <li className="chapter-list__item">
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
      <div className="eye-icon" style={{ background: 'red', width: '32px', height:'32px'}}></div>
    </a>
  </li>
)

ChapterClicker.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ChapterClicker
