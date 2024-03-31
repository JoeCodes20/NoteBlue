import React from 'react'
import "../Music.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sea from "../All/seashore.jpg"
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ItemScreen() {
  return ( <div className="Compont">
                <div><div className="frame"><img src={sea} alt="" /></div>
                <div className="songTitle">{"Whispers"}</div>        
                <div className="artistName">{"Brandon Broduie whispers"}</div>
                <div className="trash"><FontAwesomeIcon icon={faTrash} /></div> </div>

            </div>
  )
}

export default ItemScreen