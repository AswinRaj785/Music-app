import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import './Header.css'
import { useGlobalValue } from './Stateprovider'


function Header() {
    const [{user},dispatch]=useGlobalValue()
    console.log("user pic here ",user?.images[0].url)
    return (
        <div className="header">
            <div className ="header_left">
            <Search />
                <input placeholder="Search for Artists, Songs, or Podcasts " type="text"/>
            </div>
            <div className ="header_right">
                <Avatar src={user?.images[0].url}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
