import React from 'react'
import "./SideBar.css"
import SideBarOption from './SideBarOption/SideBarOption';
import {Twitter 
,BookmarkBorder,Home,ListAlt,MailOutline,MoreHoriz,NotificationsNone,PermIdentity,
Search,
Book,LogoutOutlined} from "@mui/icons-material"
import{Button, List}from "@mui/material"
const SideBar = () => {
  return (
    <div className="SideBar">
      <Twitter className="SideBar_Twitter-icon"/>
      <SideBarOption active Icon={Home}text="Home"/>
      <SideBarOption Icon={Search} text="Explore"/>
      <SideBarOption Icon={NotificationsNone} text="Notifications"/>
      <SideBarOption Icon={MailOutline} text="Messages"/>
      <SideBarOption Icon={BookmarkBorder} text="Bookmarks"/>
      <SideBarOption Icon={ListAlt} text="Lists"/>
      <SideBarOption Icon={PermIdentity} text="Profile"/>
      <SideBarOption Icon={Book} text="Book"/>
      <SideBarOption Icon={LogoutOutlined
      } text="logout"/>
      <SideBarOption Icon={MoreHoriz} text="More"/>
      <Button className="SideBar_tweet-btn" variant="outlined" fullWidth>Tweet</Button>
    </div>
  )
}

export default SideBar;
