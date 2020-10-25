import React, { useContext } from 'react';
import ChapterClicker from "../../components/Home/ChapterClicker";
import { navigate } from 'gatsby';
import PropTypes from 'prop-types'

// Icon Imports
import HomeIcon from "../../assets/icons/32x32/home-grey.inline.svg"
import IndexIcon from "../../assets/icons/32x32/index-grey.inline.svg"
import NextChapterIcon from "../../assets/icons/nextChapterArrow.inline.svg"
import PreviousChapterIcon from "../../assets/icons/previousChapterArrow.inline.svg"

// Import context
import { SidebarOpenContext } from "../../templates/chapters"

const ControlStrip = ({ toggleMobileSidebar, isSidebarOpen }) => (
  <div className="mobile-sidebar__control-strip" style={{
    backgroundColor: `${isSidebarOpen ? 'var(--color-grey-0)' : 'var(--color-grey-minus2)'}`
  }}>
    <button type="button" onClick={toggleMobileSidebar}><IndexIcon/></button>
    <button type="button" onClick={toggleMobileSidebar}><PreviousChapterIcon/></button>
    <button type="button" onClick={toggleMobileSidebar}><NextChapterIcon/></button>
    <button type="button" onClick={() => navigate('/')}><HomeIcon/></button>
  </div>
)

const MobileSidebar = ({ currentChapter = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext);

  const tY = isSidebarOpen ? '0%' : 'calc(100vh - 19rem)';

  const toggleMobileSidebar = _ => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <aside className="mobile-sidebar"
        style={{
          transform: `translateY(${tY})`,
        }}>
        <ControlStrip toggleMobileSidebar={toggleMobileSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="mobile-sidebar__index">
          <ul>
            <ChapterClicker number={0} />
            <ChapterClicker number={1} />
            <ChapterClicker number={2} />
            <ChapterClicker number={3} />
            <ChapterClicker number={4} />
            <ChapterClicker number={5} />
            <ChapterClicker number={6} />
            <ChapterClicker number={7} />
            <ChapterClicker number={8} />
            <ChapterClicker number={9} />
          </ul>
        </div>
      </aside>
      <div
        onClick={toggleMobileSidebar}
        className="mobile-sidebar-overlay"
        style={{ display: `${isSidebarOpen ? "block" : "none"}` }}
      ></div>
    </>
  );
}

export default MobileSidebar
