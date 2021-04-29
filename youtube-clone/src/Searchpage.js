import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
function Searchpage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
             <TuneIcon/>
             <h3>FILTER</h3>
           </div>
           <hr/>
          <ChannelRow
            image="https://cleverprogrammerstudentoftheweekhome.files.wordpress.com/2019/08/cropped-logo.png?w=200"
            channel="Clever Programmer"
            verified
            subscription="836k"
            noOfVideos={493}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.."
          />

          <hr/>

        </div>
    )
}

export default Searchpage
