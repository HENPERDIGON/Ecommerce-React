import React from "react"

/* import  ReactDOM from "react-dom" */

import  ReactDOM from "react-dom/client"


import App from "./components/App"

/* import  "./styles.css" */
import  "./styles.scss"


const root = ReactDOM.createRoot (document.getElementById ("root"))

/* const App = () => {
    return "Hola Mundo"
} */

/* ReactDOM.render (<App/>, document.getElementById ("root")) */

root.render (<App/>)
