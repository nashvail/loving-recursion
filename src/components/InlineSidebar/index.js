import React from "react"

// Component Imports
import ChapterClicker from "../Home/ChapterClicker"
import Spacer from "../Spacer"

const InlineSideBar = ({ isOpen = false }) => {
  const tX = isOpen ? "0%" : "-100%"

  return (
    <aside
      style={{
        transform: `translateX(${tX})`,
      }}
      className="inline-sidebar"
    >
      <section className="inline-sidebar__top">
        <span
          style={{ marginTop: "-13rem" }}
          className="home-page__left__flap"
        />
        <div>
          <h2>
            <span>LOVING</span>
            <span>RECURSION</span>
          </h2>
        </div>
      </section>
      <section className="inline-sidebar__bottom">
        <Spacer height="sp_xxl" />
        <ol>
          <ChapterClicker
            style={{ padding: "3.2rem" }}
            number={2}
            name="Hello"
            link="#"
          />
          <ChapterClicker
            style={{ padding: "3.2rem" }}
            number={2}
            name="Hello"
            link="#"
          />
        </ol>
      </section>
    </aside>
  )
}

export default InlineSideBar
