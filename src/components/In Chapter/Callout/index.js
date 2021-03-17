import React from "react"

// Import Icon
import IconBulbLight from "../../../assets/icons/32x32/bulb-light.inline.svg"

const Callout = ({ children }) => (
  <div className="callout">
    <span><IconBulbLight/></span>
    {children}
  </div>
)

export default Callout