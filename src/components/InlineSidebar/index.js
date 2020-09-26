import React from "react"
import PropTypes from "prop-types"

// Component Imports
import ChapterClicker, { HomeClicker } from "../Home/ChapterClicker"
import Spacer from "../Spacer"

const InlineSideBar = ({ currentChapter = 0, isOpen = false }) => {
  const tX = isOpen ? "0%" : "-100%"

  return (
    <>
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
          <hr style={{ borderColor: "var(--color-grey-0)", borderWidth: "2px"}}/>
          <Spacer height="sp_xxl" />
          <ol>
            <ChapterClicker
              style={{ padding: "3.2rem" }}
              number="Take me"
              name="Home"
              link="/"
              home
            />
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
      <div
        className="inline-sidebar-overlay"
        style={{ display: `${isOpen ? 'block' : 'none'}`}}
      ></div>
    </>
  )
}

InlineSideBar.propTypes = {
  chapterNumber: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
}

export default InlineSideBar
