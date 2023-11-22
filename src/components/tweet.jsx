import React from "react";
import tweetprofile from "../images/tweetprofile.png";
import img from "../images/twetIcone.png";
import images from "../images/tweetimage.png";
import image from "../images/Group.svg";

function TweetForm (){
    return (
        <div>
            <Tweets/>
            <TweetContener/>
        </div>
    )
}

function Tweets (){
    return (
        <div className="tweet">
            <div className="avatar">
             <img src={tweetprofile} alt="logo tweet" />
            </div>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Reiciendis eum esse expedita officia ipsa deleniti exercitationem nemo voluptatem consequatur,
                 adipisci accusamus magni quaerat quasi quidem, dolorem id veniam maxime.
                  Deleniti.
            </p>

        </div>
    )
}

function TweetContener(){
    return (
        <div className="tweet">
            <div>
            <TweetAvatar/>
            </div>
            <TweetBody/>
        </div>
    )
}
function TweetAvatar (){
    return (<div className="tweet-avatar">
        <img src={img} alt="Icon tweet" className="avatar" />
    </div>)
}
function TweetBody (){
    return (
        <div className="tweet-body">
            <TweetTitle/>
            <TweetText/>
            <TweetImage/>
        </div>
    )
}
function TweetTitle (){
    return <div className="tweet-title">
        <img src={image} alt="title tweet"/> 
    </div>
}
function TweetText (){
    return <p className="tweet-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa odit illum iste. Suscipit impedit repudiandae facilis, autem sequi architecto ex, reprehenderit quia quidem et iusto dolores nisi consectetur? Sed.
    </p>
}

function TweetImage (){
    return (
        <div className="tweet-image">
            <img src={images} alt="imageTweet" />

        </div>
    )
}
function TweetAction(){
    return (
        <div>

        </div>
    )
}

export default TweetForm;