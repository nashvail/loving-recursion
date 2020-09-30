import React from 'react';
import PropTypes from "prop-types";
import { navigate } from 'gatsby';

// Import icons
import HomeIcon from "../../assets/icons/32x32/home.inline.svg"


const Button = ({ text, link, style }) => (
  <button style={style} className="chapter_switcher__controls__button" type="button" onClick={() => navigate(link)}>{text}</button>
)

const IconButton = ({ link }) => (
  <button className="chapter_switcher__controls__button--icon-button" type="button" onClick={() => navigate(link)}><HomeIcon/></button>
)

const generateNextChapterLink = (currentChapter) => {
  return `/chapter${currentChapter + 1}`;
}

const generatePreviousChapterLink = (currentChapter) => {
  if(currentChapter - 1 >= 0) {
    return `/chapter${currentChapter - 1}`
  } else {
    return '/';
  }
}

const ChapterSwitcher = ({ currentChapter=0 }) => {
  return (
    <div className="chapter_switcher">
      <div className="chapter_switcher__content">
        <h3>Chapter Name</h3>
      </div>
      <div className="chapter_switcher__controls">
        <Button style={{ borderBottomLeftRadius: "8px" }} text="Previous Chapter" link={generatePreviousChapterLink(currentChapter)} />
        <IconButton link="/"/>
        <Button style={{ borderBottomRightRadius: "8px" }} text="Next Chapter" link={generateNextChapterLink(currentChapter)} />
      </div>
    </div>
  )
}

ChapterSwitcher.propTypes = {
  currentChapter: PropTypes.number.isRequired
}

export default ChapterSwitcher