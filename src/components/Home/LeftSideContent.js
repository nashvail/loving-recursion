import React from "react"

const ChapterClicker = ({ number }) => (
  <li>
    <a>
      Chapter {number}
    </a>
  </li>
);

const LeftSideContent = () => (
  <section className="home-page__left">
    <h1>Loving Recursion</h1>
    <h2>Written in English and JavaScript</h2>
    <ol className="home-page__left__chapter-list">
      <ChapterClicker number={1}/>
      <ChapterClicker number={2}/>
      <ChapterClicker number={3}/>
    </ol>
  </section>
)

export default LeftSideContent