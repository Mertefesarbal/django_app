import { useState, useRef, useEffect } from 'react'
import '../styles/slider.css'; 
import "../styles/thumb.css";
import { FaPlay } from "react-icons/fa"; 
import { FaPause } from "react-icons/fa"; 

function AudioPlayer({ percentage = 0, onChange }) {
    const  [isPlaying, setIsPlaying] = useState(false); 
    // false means we do not want it to play automatically 

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying); 
    }
  return (
    <div className = "audioPlayer">
      
      <button onClick = {togglePlayPause}>
        {isPlaying ? <FaPause/> : <FaPlay/>}
      </button>

      <div>
        
        <input type='range'/>
    
      </div>

    </div>
    
  )
}

export default AudioPlayer
