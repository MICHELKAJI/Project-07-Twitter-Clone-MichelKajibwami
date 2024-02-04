import React from "react";
import iconGif from "../images/Gif.svg";
import iconMedia from "../images/Media.svg";
import iconPoll from "../images/Poll.svg";
import iconSchdule from "../images/Schedule.svg";
import Button from "./buttonTwitter";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";





function TwitterEditor(){
    return (
        <div className="tweet-editor">
            <div> <Link to='/profile?profilTweet=src/images/profile.png&tweetTitle=undefined&tweetpseudo=undefined'><img src={profile} alt="profile"/></Link></div>
            <TweetEditorForm/>
        </div>
    )
}
function TweetEditorForm(){
    return <div className="tweet-editor-form">
        <TwetteEditorInput/>
        <TwitterButtonForm/>
    </div>
}

function TwetteEditorInput (){
    return (
        <textarea className="tweet-editor-input" rows="4" cols="50" placeholder=" What's happening"></textarea>
    ) 
}

function TwitterButtonForm (){
    return (<div className="tweet-editor-buttons">
        <TweeterEditorAction/>
        <Button style= "button"> Twitter</Button>
    </div>)
}

function TweeterEditorAction (){
    return <div className="tweet-editor-actions">
        <img src={iconGif} alt="Edit icon" />
        <img src={iconMedia} alt="Edir icon" />
        <img src={iconPoll} alt="Edit icon" />
        <img src={iconSchdule} alt="Edit icon" />

    </div>
}

export default TwitterEditor;