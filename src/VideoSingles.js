import React from 'react'
import Nav from './Nav'
import VideoTemplate from './VideoTemplate'
import VideoOne from './Flutter Provider - Advanced Firebase Data Management.mp4'

function VideoSingles() {
    return (
        <div>
            <Nav />
            <div className="video-singles">
                <VideoTemplate
                src={VideoOne}
                />
                <VideoTemplate 
                    src={VideoOne}
                />
                <VideoTemplate 
                    src={VideoOne}
                />
                <VideoTemplate 
                    src={VideoOne}
                />
                <VideoTemplate 
                    src={VideoOne}
                />
                <VideoTemplate 
                    src={VideoOne}
                />
            </div>
        </div>
    )
}

export default VideoSingles
