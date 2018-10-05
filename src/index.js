import React from 'react'
import ReactDOM from 'react-dom'
import App from "./js/app"
import GlobalStyles from "./theming/global-styles"

// Load global styles
GlobalStyles()

// Build app
ReactDOM.render(<App />, document.getElementById("app"))
