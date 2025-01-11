import {useEffect} from 'react'
import {useState} from 'react'


function Music({formData, setFormData}) {

    const mood = formData.wannaFeel

    const [isAudioPlaying, setIsAudioPlaying] = useState(0)
    const [audioProgress, setAudioProgress] = useState(0)

    const handleAudioPlay = () => {
        if(isAudioPlaying) {
          //currentAudio.current.play();
          setIsAudioPlaying(false)
        }
        else {
          //currentAudio.current.pause();
          setIsAudioPlaying(true)
        }
    
      }

    return(
        <div>
            <h2>{mood}</h2>
            <div className="container">
                <audio></audio>

                <div className="music-container">

                <p className="musicPlayer"> Music Player</p>
          
                <div className="musicTimerDiv">
                    <p className="musicCurrentTime">00 : 00</p>
                    <p className="musicTotalLenght">03 : 49</p>
                </div>

                <input type="range" name="musicProgress" className="musicProgressBar" />

                <div className='musicControlers'>
                    <i className="play" onClick={handleAudioPlay}>{isAudioPlaying ? "||" : "►"}</i>
                </div>
            </div>

      </div>
            
        </div>
    )
}

export default Music;