import React, { useEffect, useLayoutEffect } from "react"

import ChapterClicker from "./ChapterClicker"

let Splitting
if (typeof window !== `undefined`) {
  Splitting = require('splitting')
}


const LeftSideContent = () => {


  useLayoutEffect(() => {
    Splitting({ by: 'chars' })
  })

  useEffect(() => {

    if(typeof window === 'undefined') return null;
    const title = document.querySelector('.title');

    setTimeout(() => {
      title.classList.add('show')
    }, 175)

    return () => {
      title.classList.remove('show')
    }


  }, []); // this is basically the first component did load

  return (
    <section className="home-page__left">
      <h1
        style={{
          fontSize: "56px",
          color: "#ffffff",
          fontFamily: "GT America-Standard Regular",
        }}
        className="title"
        data-splitting=""
      >
        LOVING WHAT
      </h1>
      <h1
        style={{
          fontSize: "56px",
          color: "#ffffff",
          fontFamily: "GT America-Expanded Bold",
          marginTop: "-4rem",
        }}
      >
        RECURSION
      </h1>
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
}

export default LeftSideContent
