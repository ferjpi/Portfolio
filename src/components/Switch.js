/* eslint-disable jsx-a11y/click-events-have-key-events*/
/* eslint-disable jsx-a11y/no-static-element-interactions*/
/* eslint-disable jsx-a11y/aria-role*/
import React, { useContext } from "react"
import { ThemeContext } from "./theme/theme"

// const initialTheme = "light"

// const reducer = (state, action) => {
//   const { type } = action
//   switch (type) {
//     case "light":
//       return (state = "dark")
//     case "dark":
//       return (state = "light")
//     default:
//       return state
//   }
// }

const Switch = () => {
  const { state, dispatch } = useContext(ThemeContext)
  // const [theme, dispatch] = useReducer(reducer, initialTheme)

  // console.log(theme)

  return (
    <div
      className={`switch ${state}`}
      onClick={() => dispatch({ type: state })}
    >
      <div className="fill">
        <div className="circle"></div>
      </div>
    </div>
  )
}

export default Switch
