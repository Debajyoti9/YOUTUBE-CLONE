import { Avatar, Button} from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({image,channel,verified,subscription,noOfVideos,description}) {
    return (
        <div className="channelrow">
              <Avatar className="channelRow__logo" alt={channel} src={image}/>
              <div className="channelRow__text">
                  <h4>{channel} {verified && <CheckCircleIcon/>}</h4>
                  <p>{subscription} Sunbscribers . {noOfVideos} Videos</p>
                  <p>{description}</p>
              </div>
        </div>
    )
}

export default ChannelRow;
