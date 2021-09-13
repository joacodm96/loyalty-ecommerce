import React from 'react'


/* import Products from "./components/Products/Products"
import NavBar from "./components/NavBar/Navbar" */

import { Products, NavBar } from "./components"

const App = () => {
    return (
        <div>
            <NavBar />
            <Products />
        </div>
    )
}

export default App;