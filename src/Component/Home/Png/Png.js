import React from 'react'
import "./Png.css"
import {TwitterTimelineEmbed} from "react-twitter-embed" 
const Png = () => {
  return (
    <div className="Png">
      <TwitterTimelineEmbed className="Png_Container"
      sourceType="profile"
      screenName="saurabhnemade"
      options={{height:600}}/>
    </div>
  )
}

export default Png
