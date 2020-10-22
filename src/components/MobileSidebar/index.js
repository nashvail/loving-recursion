import React, { useContext } from 'react';
import ChapterClicker from "../../components/Home/ChapterClicker";
import PropTypes from 'prop-types'

// Import context
import { SidebarOpenContext } from "../../templates/chapters"

// Import the index 
import { ResponsiveIndex } from "../../components/Home/RightSideContent";

const MobileSidebar = ({ currentChapter = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext);

  const tY = isSidebarOpen ? '0%' : 'calc(100vh - 9rem)';

  const toggleMobileSidebar = _ => setIsSidebarOpen(!isSidebarOpen);

  return (
    <aside className="mobile-sidebar"
      style={{
        transform: `translateY(${tY})`,
      }}>
      <div className="mobile-sidebar__control-strip">
        <button type="button" onClick={toggleMobileSidebar}>Do Something</button>
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
  );
}

export default MobileSidebar
