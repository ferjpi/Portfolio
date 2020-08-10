import React from "react"

import SideMenu from "./sideMenu"

// css
import "./mainContainer.css"

const MainContainer = ({ children }) => {
  return (
    <div className="main_container">
      <SideMenu />
      {children}
    </div>
  )
}

export default MainContainer
