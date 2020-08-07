import React from "react"

const ChapterClicker = ({ number, name, link }) => (
  <li>
    <a href="#">
      <span style={{
        fontFamily: 'GT Eesti Pro Text-Regular',
        fontSize: '20px',
        display: 'block',
        color: '#75AAB3'
      }}>Chapter {number}</span>
      <span style={{
        fontFamily: 'GT America-Expanded Medium',
        fontSize: '30px',
        color: '#112d32'
      }}>{name}</span>
    </a>
  </li>
);

const LeftSideContent = () => (
  <section className="home-page__left">
    <h1 style={{ fontSize: '48px '}}>LOVING RECURSION</h1>
    <h2>Chapters</h2>
    <ol className="home-page__left__chapter-list">
      <ChapterClicker number={0} name="Introduction" />
      <ChapterClicker number={1} name="The Encounter" />
      <ChapterClicker number={2} name="Then Comes Trust" />
      <ChapterClicker number={3} name="Procedures and Patterns" />
    </ol>
  </section>
)

export default LeftSideContent