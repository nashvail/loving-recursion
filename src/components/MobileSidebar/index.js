import React, { useContext } from 'react';
import ChapterClicker from "../../components/Home/ChapterClicker";
import { navigate } from 'gatsby';
import PropTypes from 'prop-types'

// Import context
import { SidebarOpenContext } from "../../templates/chapters"

// Import the index 
import { ResponsiveIndex } from "../../components/Home/RightSideContent";

const MobileSidebar = ({ currentChapter = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext);

  const tY = isSidebarOpen ? '0%' : 'calc(100vh - 18rem)';

  const toggleMobileSidebar = _ => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <aside className="mobile-sidebar"
        style={{
          transform: `translateY(${tY})`,
        }}>
        <div className="mobile-sidebar__control-strip" style={{
          backgroundColor: `${isSidebarOpen ? 'var(--color-grey-0)' : 'var(--color-grey-minus2)'}`
        }}>
          <button type="button" onClick={toggleMobileSidebar}>Index</button>
          <button type="button" onClick={toggleMobileSidebar}>Prev. Chapter</button>
          <button type="button" onClick={toggleMobileSidebar}>Next Chapter</button>
          <button type="button" onClick={() => navigate('/')}>Home</button>
        </div>
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
