import React from "react"

import ChapterClicker from "./ChapterClicker"

const LeftSideContent = () => (
  <section className="home-page__left">
    <h1 style={{ fontSize: '48px', color: '#ffffff', fontFamily: 'GT America-Expanded Bold'}}>LOVING RECURSION</h1>
    <h2>Chapters</h2>
    <ol className="home-page__left__chapter-list">
      <ChapterClicker number={0} name="Introduction" link="/introduction" />
      <ChapterClicker number={1} name="The Encounter" />
      <ChapterClicker number={2} name="Then Comes Trust" />
      <ChapterClicker number={3} name="Procedures and Patterns" />
      <ChapterClicker number={4} name="Chasing Cars, Drawing Triangles" />
    </ol>
  </section>
)

export default LeftSideContent