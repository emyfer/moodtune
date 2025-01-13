import {useEffect} from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import "./music.css"

function Music({formData, setFormData}) {

    const mood = formData.wannaFeel

    const currentAudio = useRef()

    const [isAudioPlaying, setIsAudioPlaying] = useState(0)
    const [audioProgress, setAudioProgress] = useState(0)

    const handleAudioPlay = () => {
        if(currentAudio.current.paused) {
          currentAudio.current.play();
          setIsAudioPlaying(true)
        }
        else {
          currentAudio.current.pause();
          setIsAudioPlaying(false)
        }
    
      }

    return(
        <div className='containerM'>
            <h2>{mood}</h2>
            <audio src='./song.mp3' ref={currentAudio} ></audio>

            <div className="music-container">

              <div className='musicControlers'>
                <i onCli className="play" onClick={handleAudioPlay}>{isAudioPlaying ? "||" : "►"}</i>
              </div>

              <input type="range" name="musicProgress" className="musicProgressBar" />
              
            </div>

        </div>
    )
}

export default Music;