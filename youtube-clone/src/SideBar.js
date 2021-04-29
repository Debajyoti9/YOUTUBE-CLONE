import React from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionsIcon}  title="Subscription"/>
            <hr/>
            <SideBarRow Icon={LibraryAddIcon} title="Libary"/>
            <SideBarRow Icon={HistoryIcon} title="History"/>
            <SideBarRow Icon={OndemandVideoOutlinedIcon} title="Your videos"/>
            <SideBarRow Icon={LocalMoviesIcon} title="Your Movies"/>
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos"/>
            <SideBarRow Icon={ExpandMoreIcon} title="Show more"/>
        </div>
    )
}

export default SideBar
