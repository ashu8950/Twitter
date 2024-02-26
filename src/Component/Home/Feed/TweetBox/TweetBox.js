import React from 'react'
import{Avatar, Button} from "@mui/material"
import "./TweetBox.css";
import{ImageOutlined,GifBoxOutlined,PollOutlined,SentimentSatisfiedAltOutlined,
CalendarTodayOutlined,LocationOnOutlined}from "@mui/icons-material";
const TweetBox = () => {
  return (
    <div className="TweetBox">
        <form className="TweetBox_Form">
         <Avatar className="TweetBox_Avatar"/>
         <div className="TweetBox_Form-Field">
            <div className="TweetBox_Input">
                <input type="text" placeholder="what's happening?"/>
            </div>
            <div className="TweetBox_Input">
                <div className="TweetBox_Icons">
                    <ImageOutlined className="TweetBox_Icon"/>
                    <GifBoxOutlined className="TweetBox_Icon"/>
                    <PollOutlined className="TweetBox_Icon"/>
                    <SentimentSatisfiedAltOutlined className="TweetBox_Icon"/>
                    <CalendarTodayOutlined className="TweetBox_Icon"/>
                    <LocationOnOutlined className="TweetBox_Icon"/>
                </div>
                <Button className="TweetBox_btn">Tweet</Button>
            </div>
         </div>
        </form>
    </div>
  )
}

export default TweetBox
