import React from 'react'
import './App.css'

function VideoTemplate(props) {
    return (
        <div>
            <video src={props.src} controls width="400px" height="400px"></video>
        </div>
    )
}

export default VideoTemplate
