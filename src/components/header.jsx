import React from "react";
import'./header.css'

function Header() {
    return(
        <div className="header">
            <img src="/earth.jpg" alt="" />
            <div className="header_title">
                <h1>Nasa Gallery</h1>
            </div>
        </div>

    )
}

export default Header