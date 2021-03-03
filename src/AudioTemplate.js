import React from 'react'
import './App.css'

function AudioTemplate(props) {
    return (
        <div className="audio-singles">
            <audio src={props.src} controls></audio>
        </div>
    )
}

export default AudioTemplate
