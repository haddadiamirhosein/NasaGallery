import React from "react";
import'./header.css'

function Header() {
    return(
        <header className="header">
            <img src="/earth.jpg" alt="" />
            <div className="header_title">
                <h1> <span className="text_nasa">Nasa </span>Gallery</h1>
            </div>
        </header>

    )
}

export default Header