import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ocean from "../All/ocean.jpg"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "../Music.scss"

function LightStream() {
  return ( <div className="Compont">
              <div><div className="lens"><img src={ocean} alt="" /></div>
              <div className="enddors"><h2>{"Whispers"}</h2></div>        
              <div className="artName"><h2>{"Dave Bextter"}</h2></div>
              <div className="bin"><FontAwesomeIcon icon={faTrash} /></div> </div>

             </div>
  )
}

export default LightStream