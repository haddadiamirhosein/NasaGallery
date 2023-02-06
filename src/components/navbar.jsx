import React, { useEffect, useState } from "react";
import './navbar.css'

function Navbar() {

    const[url] = useState('/spacesong.mp3')
    const[audio] = useState(new Audio(url))
    const[playing , setPlaying] = useState(false);

    const change = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },[playing])
    
    return(
        <nav className="navbar">

            <div className="logo">
                <img src="/nasa-logo.png" alt="" />
            </div>
            
            <div className="search">
                <form action="">
                    <div className="icon_search">
                        <button className="search_btn" type="submit">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </div>
                    <input type="text" name="" id="" />
                </form>
            </div>
            
            <div className="navbar_audio" onClick={change}>

            <span class="material-symbols-outlined">
                {playing ? "pause" : "play_arrow"}
            </span>

            </div>
        
        </nav>
    )
}

export default Navbar