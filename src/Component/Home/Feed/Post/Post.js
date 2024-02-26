import React from 'react'
import "./Post.css"
import {Avatar} from "@mui/material"
import { MoreHoriz,ChatBubbleOutline,Repeat,FavoriteBorderOutlined,PublishOutlined } from '@mui/icons-material'
const Post = () => {
  return (
<div className="Post">
      <Avatar 
      src="https://media.gettyimages.com/id/1435854325/photo/melbourne-australia-virat-kohli-of-india-celebrates-winning-the-icc-mens-t20-world-cup-match.jpg?s=612x612&w=0&k=20&c=4OXRTAZJkEa6MPkiXGjBPP_dGh-93mmxVMe_bFmZMqg="
      className="Post_Avatar"/>
    <div className="Post_Content">
      <div className="Post_Header">
        <div className="Post_Title">
            <h3>Virat Kohli</h3>
            <h4>@Virat</h4>
        </div>
        <MoreHoriz className="Post_Option"/>
      </div>
      <div className="Post_Discription">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </div>
      <div className="Post_Media">
        <img src="https://media.gettyimages.com/id/1435854325/photo/melbourne-australia-virat-kohli-of-india-celebrates-winning-the-icc-mens-t20-world-cup-match.jpg?s=612x612&w=0&k=20&c=4OXRTAZJkEa6MPkiXGjBPP_dGh-93mmxVMe_bFmZMqg="alt=""/>
      </div>
      <div className="Post_Footer">
        <ChatBubbleOutline fontSize="small"/>
        <Repeat fontSize="small"/>
        <FavoriteBorderOutlined fontSize="small"/>
        <PublishOutlined fontSize="small"/>
      </div>
    </div>  
</div>
  )
}

export default Post
