import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Nav() {
    return (
        <div className="navigation">
            <Link className="links" to="/audio-singles">
                <p>Audio Singles</p>
            </Link>
            <Link className="links" to="/video-singles">
                <p>Video Singles</p>
            </Link>
            <Link className="links" to="/audio-mix">
                <p>Audio Mix</p>
            </Link>
            <Link className="links" to="/video-mix">
                <p>Video Mix</p>
            </Link>
        </div>
    )
}

export default Nav
