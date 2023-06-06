import React from 'react';
import "./topbar.css";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import {HomeOutlined} from "@mui/icons-material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
 
    const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 0 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={`header ${stickyClass}`}>
          <div className="headerLeft">
          <div className="toggle_btn">
            <MenuOutlinedIcon/> </div>
            
          <div className="LogoName">
          <span className="logo">BeeeWing</span>
          </div>
          </div>
          <div className='headerCenter'>      
          <HomeOutlined className="HomeIcon" />
          <a href='/'  className="Home"> Home</a>
            <container className='HeaderItemCenter'>
            <a href= '/Explore'  className='centertext'>Explore</a>
            <a href= '/Community' className='centertext'>Community feed</a>
            <a href= '/Mutual' className='centertext'>Mutual friend</a>
           </container>
            </div>
            
            <div className="headerRight">
         <a href="/messenger">   <ForumOutlinedIcon className="IconsRight" /></a>
            <NotificationsNoneOutlinedIcon className="IconsRight" />
            <span className="id">{user.username}</span>
            <Link to={`./profile/${user.username}`}>
            <img src= {
                user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"} alt=""
                 className="profileImg"/>
                 </Link>
        </div>
    </div>
  );
}
export default Topbar


