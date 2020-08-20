import React, { useState } from "react"
import { Link } from "gatsby"

import LeftSideContent from "../components/Home/LeftSideContent"
import RightSideContent from "../components/Home/RightSideContent"

// SCSS
import "../assets/scss/index.scss"

export const RightSideScrollContext = React.createContext()

const IndexPage = () => {
  // For the value of the right section scrolled 
  const [rightSideScrollContext, setRightSideScrollContext] = useState(0)

  return (
    <main className="home-page">
      <RightSideScrollContext.Provider value={[rightSideScrollContext, setRightSideScrollContext]}>
        <LeftSideContent />
        <RightSideContent />
      </RightSideScrollContext.Provider>
    </main>
  )
}

export default IndexPage
