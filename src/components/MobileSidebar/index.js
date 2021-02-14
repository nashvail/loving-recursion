import React, { useContext } from 'react';
import ChapterClicker from "../../components/Home/ChapterClicker";
import { navigate } from 'gatsby';

// Local Imports
import { generateNextChapterLink, generatePreviousChapterLink } from "../../utils"

// Icon Imports
import HomeIcon from "../../assets/icons/32x32/home-grey.inline.svg"
import IndexIcon from "../../assets/icons/32x32/index-grey.inline.svg"
import NextChapterIcon from "../../assets/icons/nextChapterArrow.inline.svg"
import PreviousChapterIcon from "../../assets/icons/previousChapterArrow.inline.svg"

// Import chapters data
import chapters from "../../data/chapters.json"


// Import context
import { SidebarOpenContext } from "../../templates/chapters"

const ControlStrip = ({ toggleMobileSidebar, isSidebarOpen, currentChapter }) => (
  <div className="mobile-sidebar__control-strip" style={{
    backgroundColor: `${isSidebarOpen ? 'var(--color-grey-0)' : 'var(--color-grey-minus2)'}`
  }}>
    <button type="button" onClick={toggleMobileSidebar}><IndexIcon /></button>
    <button type="button" onClick={() => navigate(generatePreviousChapterLink(currentChapter))}><PreviousChapterIcon /></button>
    <button type="button" onClick={() => navigate(generateNextChapterLink(currentChapter))}><NextChapterIcon /></button>
    <button type="button" onClick={() => navigate('/')}><HomeIcon /></button>
  </div>
)

const ChapterList = () => (
  <div className="mobile-sidebar__index">
    <ul>
      {(chapters.map((chapterData, key) => (
        <ChapterClicker
          link={chapterData.link}
          name={chapterData.chapterName}
          number={chapterData.chapterNumber}
          published={chapterData.published}
          key={key}
        />
      )))}
    </ul>
  </div>
)

const MobileSidebar = ({ currentChapter = 0 }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useContext(SidebarOpenContext);

  // This also needs a little bit of fixing 
  const tY = isSidebarOpen ? '10%' : 'calc(100vh - 19rem)';

  const toggleMobileSidebar = _ => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <aside className="mobile-sidebar"
        style={{
          transform: `translateY(${tY})`,
        }}>
        <ControlStrip toggleMobileSidebar={toggleMobileSidebar} isSidebarOpen={isSidebarOpen} currentChapter={currentChapter} />
        <ChapterList />
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
