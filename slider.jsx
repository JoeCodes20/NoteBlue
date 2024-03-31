import {useState, useRef, useEffect} from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import song from "../All/BetaAlbum/Whisper.mp3"
import songtile from "../componts/audio.json"
import {faShuffle} from '@fortawesome/free-solid-svg-icons'



function Slider({songNames}) {
  const [percentage, setPercentage] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [position, setPosition] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [clickRef, setclickRef] = useState([1])
  const [likeRate, setLikeRate] = useState([120])

  const audioRef = useRef()

 

  const [currentSong, setCurrentSong] = useState("https://firebasestorage.googleapis.com/v0/b/musicop-5a26a.appspot.com/o/dark%2Fstatic%2Fmedia%2FWhisper.mp3?alt=media&token=763ba84f-0583-4b72-93a5-46612354a690")

  useEffect(()=>{
    setPosition(percentage)
  }, [percentage])

  const onChange = (e)=> {
    const audio = audioRef.current 
    audio.currentTime = (audio.duration / 10) * e.target.value
    setPercentage(e.target.value)
  }

  const play = ()=> {
    const audio = audioRef.current
    if (!isPlaying){
      setIsPlaying(true)
      audio.play()
    }
  
    if(isPlaying){
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrentDuration= (e) =>{
    const percent= ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }



  function secondsToHms(seconds){
    if (!seconds) return "00m 00s"

    let duration = seconds 
    let hours =  duration / 3600
    duration = duration % 3600
     
    let min = parseInt(duration / 60)
    duration = duration % 60

    let sec = parseInt(duration)

    if (sec < 10){
    sec = `0${sec}`
    }
    if (min < 10){
    min = `0${min}`
    }

    if(parseInt(hours, 10) > 0){
        return `${parseInt(hours, 10)}h ${min}m ${sec}s`
    }else if (min === 0){
        return `00m ${sec}s`
    }else{
        return `${min}m ${sec}s`
    }
  }
  // const onPLayBack = ()=>{
  //   const duration
  // }
const counter = useEffect(()=>{

  const bigtime = (e) => {
    const variable = songtile[Math.floor(Math.random() * 4) + 1].url
    setCurrentSong(variable)
  }
  bigtime()
}, [
  !isPlaying
]);





  const wordbomb = []

  const mathlength = useEffect(()=>{
    const number = () =>{
      wordbomb.push(1)
      return wordbomb
    }
    number()
  }, [])

  const homeChannel = useEffect(()=>{
    function like(too){
      const kim = 180
      setLikeRate(kim)
      return kim
    }
    like()
  }, [])

  const frozen = ()=>{
    setLikeRate([100])
    return likeRate[0]

  }

  let songMusic = []
  const mind = (e)=>{
    const timeleak = (e) => {
      const variable = songtile[Math.floor(Math.random() * 4) + 1].url
      setCurrentSong(variable)
      songMusic.push([variable])
      return variable
    }
    timeleak()
    console.log("flag")
    console.log(songMusic)
  }


  console.log(counter)
  console.log(currentSong)
  
  return (
    <div className='slider-container'>
        <div className="addPlaylist IconShuffle" onClick={mind}><FontAwesomeIcon icon={faShuffle} className='fa-regular fa-bookmark' /></div>
        <div className={isPlaying? "playButton" : "pauseButton" } onClick={play} ><FontAwesomeIcon icon={isPlaying? faPlay : faPause} className='fa-solid fa-play'/></div>
        <div className='progress-bar'></div>
        <div className='thumb' style={{left: `${position}`}}></div>
        <input type="range" value={position} step="0.01" className='range'  onChange={onChange}/>
        <audio autoPlay ref={audioRef} 
        src={
          
          currentSong
        } 
        
        onLoadedData={(e)=> {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        onTimeUpdate= {getCurrentDuration} className="player"
        >
        
        </audio>
        <div className="theTime">
          <div className='timer'>{secondsToHms(currentTime)}</div>
          
          <div className="timerEnd">{secondsToHms(duration) }</div>

        </div>
        
        {/* <ControlPanel play={play} isPlaying = {isPlaying} duration= {duration} currentTime= {currentTime}/> */}
    </div>
  )
}

export default Slider;
 