import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import './Player.css'
import Footer from './Footer'
import RightSidebar from './RightSidebar'



function Player({Spotify}) {
    return (
        <div className="player">
            <div className="player_body">
               <Sidebar></Sidebar>
               <Body Spotify={Spotify}></Body>
                <RightSidebar></RightSidebar>
            </div>
            <div className="player_footer">
                <Footer Spotify={Spotify}></Footer>
            </div>
        </div>
    )
}

export default Player