import React, {useContext} from "react"
import PropTypes from "prop-types"

// Component Imports
import ChapterClicker, { HomeClicker } from "../Home/ChapterClicker"
import Spacer from "../Spacer"

// Import context
import { SideBarOpenContext } from "../../templates/chapters"

const InlineSideBar = ({ currentChapter = 0}) => {
  const [isSideBarOpen, setIsSidebarOpen] = useContext(SideBarOpenContext)

  const tX = isSideBarOpen ? "0%" : "-100%"

  const toggleSidebar = _ => setIsSidebarOpen(!isSideBarOpen);

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
        onClick={toggleSidebar}
        className="inline-sidebar-overlay"
        style={{ display: `${isSideBarOpen ? 'block' : 'none'}`}}
      ></div>
    </>
  )
}

InlineSideBar.propTypes = {
  chapterNumber: PropTypes.number
}

export default InlineSideBar
