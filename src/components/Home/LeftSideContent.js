import React from "react"

import Spacer from "../Spacer"
import ChapterClicker, { ChapterAnnouncement } from "./ChapterClicker"

// Chapter Data
import chapters from "../../data/chapters.json"

// Image imports
import donut1 from "../../assets/images/donut-1.svg"

// Icon imports
import IndexIcon from "../../assets/icons/32x32/index-yellow.inline.svg"

// Renders the list of chapters
const Chapters = () => {
  const chapterClickers = chapters.map((chapterData, key) => (
    <ChapterClicker
      link={chapterData.link}
      name={chapterData.chapterName}
      number={chapterData.chapterNumber}
      published={chapterData.published}
      key={key}
    />
  ))

  // Insert the intermediary
  chapterClickers.splice(5, 0, <ChapterAnnouncement />)

  return (
    <ol className="home-page__left__chapter-list">
      {chapterClickers.map(clicker => clicker)}
    </ol>
  )
}

const LeftSideContent = () => {
  return (
    <section className="home-page__left" >
      <img src={donut1} className="home-page__left__donut1" alt="Decorational donut"/>
      <span className="home-page__left__flap" />
      <Spacer height="sp_xl" />
      <h1 className="home-page__left__title">
        LOVING RECURSION
      </h1>
      <Spacer height="sp_sm" />
      <p style={{ color: "var(--color-grey-5)", width: "80%" }}>
        A book about learning to love recursion. Written in English and
        JavaScript.
      </p>
      <Spacer height="sp_xxl" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "32px auto",
          gridGap: "1rem",
          alignItems: "center",
        }}
      >
        <IndexIcon style={{ marginTop: "7px" }} />{" "}
        <h3 style={{ color: "var(--color-yellow-4)" }}>Index</h3>
      </div>
      <Spacer height="sp_base" />
      <Chapters />
    </section>
  )
}

export default LeftSideContent
