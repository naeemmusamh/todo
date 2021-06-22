import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./context/ThemeContext.js";

import App from "./App.js";

ReactDOM.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
    ,document.getElementById('root')
)
