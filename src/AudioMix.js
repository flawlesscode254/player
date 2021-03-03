import React from 'react'
import Nav from './Nav'
import AudioTemplate from './AudioTemplate'
import AudioOne from './Facading - You And Me [NCS Release].mp3'
import AudioTwo from './Lost Sky - Need You [NCS Release].mp3'
import AudioThree from './Lost Sky - Vision [NCS Release].mp3'
import AudioFour from './Lost Sky - Dreams pt. II (feat. Sara Skinner) [NCS Release].mp3'
import AudioFive from './Diamond Eyes - Gravity [NCS Release].mp3'
import AudioSix from './Diamond Eyes - Flutter [NCS Release].mp3'
import AudioSeven from './Diamond Eyes - Everything [NCS Release].mp3'

function AudioMix() {
    return (
        <div>
            <Nav />
            <div className="audio-sing">
                <AudioTemplate
                title="Facading - You And Me [NCS Release].mp3"
                src={AudioOne}
                />
                <AudioTemplate
                title="Lost Sky - Need You [NCS Release].mp3"
                src={AudioTwo}
                />
                <AudioTemplate
                title="Lost Sky - Vision [NCS Release].mp3"
                src={AudioThree}
                />
                <AudioTemplate
                title="Lost Sky - Dreams pt. II (feat. Sara Skinner) [NCS Release].mp3"
                src={AudioFour}
                />
                <AudioTemplate
                title="Diamond Eyes - Gravity [NCS Release].mp3"
                src={AudioFive}
                />
                <AudioTemplate
                title="Diamond Eyes - Flutter [NCS Release].mp3"
                src={AudioSix}
                />
                <AudioTemplate
                title="Diamond Eyes - Everything [NCS Release].mp3"
                src={AudioSeven}
                />
            </div>
            
        </div>
    )
}

export default AudioMix
