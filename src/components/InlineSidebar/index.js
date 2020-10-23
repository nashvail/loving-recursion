import React, { useContext } from "react"
import PropTypes from "prop-types"

// Component Imports
import ChapterClicker, { HomeClicker } from "../Home/ChapterClicker"
import ChapterSwitcher from './ChapterSwitcher'
import Spacer from "../Spacer"
import HamburgerButton from './Hamburger.js'

// Chapters data
import chapters from "../../data/chapters.json"

// Import context
import { SidebarOpenContext } from "../../templates/chapters"

// Renders the list of chapters
const Chapters = ({ ignore }) =>
  chapters.map(
    (chapterData, key) =>
      key !== ignore && (
        <ChapterClicker
          link={chapterData.link}
          name={chapterData.chapterName}
          number={chapterData.chapterNumber}
          key={key}
        />
      )
  )

const InlineSideBar = ({ currentChapter = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext)

  const tX = isSidebarOpen ? "0%" : "-100%"
  const toggleSidebar = _ => setIsSidebarOpen(!isSidebarOpen)
  
  return (
    <>
      <HamburgerButton /> 
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
          <ChapterSwitcher currentChapter={currentChapter} />
          <ol>
            <Chapters ignore={currentChapter} />
          </ol>
        </section>
      </aside>
      <div
        onClick={toggleSidebar}
        className="inline-sidebar-overlay"
        style={{ display: `${isSidebarOpen ? "block" : "none"}` }}
      ></div>
    </>
  )
}

InlineSideBar.propTypes = {
  chapterNumber: PropTypes.number,
}

export default InlineSideBar
