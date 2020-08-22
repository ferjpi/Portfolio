import React, { useState } from "react"

const Switch = () => {
  const [theme, setTheme] = useState("light")

  return (
    <div
      className={`switch ${theme}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="fill">
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default Switch
