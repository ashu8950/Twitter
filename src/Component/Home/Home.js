import React from 'react';
import "./Home.css";
import SideBar from './SideBar/SideBar';
import Feed from './Feed/Feed';
import Png from './Png/Png';

const Home = () => {
  return (
    <div className="Home">
      {/* SideBar */}
      <SideBar />
      {/* Feed */}
      <Feed />
      
      {/* Widgets */}
      <Png/>
    </div>
  );
}

export default Home;

