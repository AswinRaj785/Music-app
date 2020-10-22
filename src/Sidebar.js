import React from 'react'
import './Sidebar.css'
import Sidebaroptions from './Sidebaroptions'
import spotifylogo from './spotify-logo.jpg'
import {Explore,Home,Radio} from '@material-ui/icons'
import { useGlobalValue } from './Stateprovider'

function Sidebar() {
    const [{playlists},dispatch]=useGlobalValue()
    console.log("Playlist here ",playlists)
    return (
        <div className="sidebar">
            <img className ="Sidebar-logo" src={spotifylogo} />

            <Sidebaroptions Icons={Home} title="Home"/>
            <Sidebaroptions Icons={Explore} title="Browse"/>
            <Sidebaroptions Icons={Radio} title="Radio"/>
            <br/>
            <strong className="heading">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(
                playlist => (
                    <Sidebaroptions title={playlist.name}/>
                )
            )}
            
        </div>
    )
}

export default Sidebar
