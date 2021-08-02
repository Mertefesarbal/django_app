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
    <div className='slider-container'>
      <div
        className='progress-bar-cover'
      ></div>
      <div
        className='thumb'
      ></div>
      <input
        type='range'
        step='0.01'
        className='range'
        onChange={onChange}
      />
      <button onClick = {togglePlayPause}>
        {isPlaying ? <FaPause/> : <FaPlay/>}
      </button>
    </div>
  )
}

export default AudioPlayer
