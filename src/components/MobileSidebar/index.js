import React, { useContext } from 'react';
import PropTypes from 'prop-types'

// Import context
import { SidebarOpenContext } from "../../templates/chapters"

// Import the index 
import { ResponsiveIndex } from "../../components/Home/RightSideContent";

const MobileSidebar = ({ currentChapter = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext);

  const tY = isSidebarOpen ? '2%' : 'calc(100% - 64px)';

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
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
        Hello<br/>
      </div>
    </aside>
  );
}

export default MobileSidebar
