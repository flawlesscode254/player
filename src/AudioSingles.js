import React from 'react'
import Nav from './Nav'
import AudioTemplate from './AudioTemplate'


function AudioSingles() {
    return (
        <div>
            <Nav />
            <div className="audio-sing">
            <AudioTemplate 
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/913/you-and-me-1614333639-TFbNLFMMGs.mp3"
            />
            <AudioTemplate 
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/883/1609102805_xqBo18AgD8_Lost-Sky---Need-You-NCS-Release.mp3"
            />
            <AudioTemplate 
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/671/where-we-started-feat-jex-1586959343-ugPNLDQsMI.mp3"
            />
            <AudioTemplate 
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/616/vision-1586958106-w6RKce6Cz4.mp3"
            />
            <AudioTemplate 
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/516/dreams-1586955327-tIgsclVBNj.mp3"
            />
            <AudioTemplate 
                src="https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/488/waiting-1586954633-oAYB1FDMLO.mp3"
            />
            </div>
        </div>
    )
}

export default AudioSingles
