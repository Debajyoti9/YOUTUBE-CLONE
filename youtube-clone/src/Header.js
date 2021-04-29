import React,{useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';
function Header() {

   const[inputSearch,setInputSearch] = useState("")

    return (
        <div className="header">
        <div className="header__left">
        <MenuIcon/>
        <Link to="/">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt=""/>
        </Link>
        </div>
          <div className="header__middle">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search"/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__searchButton"/>
            </Link>
          </div>
          <div className="header__right">
           <VideoCallIcon className="header__icon"/>
           <AppsIcon className="header__icon"/>
           <NotificationsIcon className="header__icon"/>
           <Avatar alt="debo" src="https://media-exp1.licdn.com/dms/image/C5103AQFLvGtkkLgmwA/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=KSH56vthfs5XuoiB6r2gXmcBEw2JDgSKNsFq3FIAkyI"/>
          </div>
           
        </div>
    )
}

export default Header
