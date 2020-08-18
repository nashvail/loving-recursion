import React, { useState } from "react"
import { Link } from "gatsby"

import LeftSideContent from "../components/Home/LeftSideContent"
import RightSideContent from "../components/Home/RightSideContent"

// SCSS
import "../assets/scss/index.scss"

export const ScrollContext = React.createContext()

const IndexPage = () => {
  // For the value of the right section scrolled 
  const [scrollContext, setScrollContext] = useState(0)

  return (
    <main className="home-page">
      <ScrollContext.Provider value={[scrollContext, setScrollContext]}>
        <LeftSideContent />
        <RightSideContent />
      </ScrollContext.Provider>
    </main>
  )
}

export default IndexPage
