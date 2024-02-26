import React from 'react'
import "./SideBarOption.css"
const SideBarOption = (props) => {
    const{text,Icon,active}=props;
  return (
    <div className={`SideBar-Option ${active && "SideBar-Option_active"}`}>
      <Icon className="SideBar-Option_icon"/>
      <h2 className="SideBar-Option_label">{text}</h2>
    </div>
  )
}

export default SideBarOption
