import React, { createContext, useReducer } from "react"

const initialTheme = "light"

const reducer = (state, action) => {
  const { type } = action
  switch (type) {
    case "light":
      return (state = "dark")
    case "dark":
      return (state = "light")
    default:
      return state
  }
}

export const ThemeContext = createContext("light")

export default function Theme({ children }) {
  const [state, dispatch] = useReducer(reducer, initialTheme)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
