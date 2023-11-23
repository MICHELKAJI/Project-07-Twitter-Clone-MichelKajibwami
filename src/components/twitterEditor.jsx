import React from "react";
import profile from "../images/profile.png";
import iconGif from "../images/Gif.svg";
import iconMedia from "../images/Media.svg";
import iconPoll from "../images/Poll.svg";
import iconSchdule from "../images/Schedule.svg";

function TwitterEditor(){
    return (
        <div className="tweet-editor">
            <ProfilAvatar/>
            <TweetEditorForm/>
        </div>
    )
}

function ProfilAvatar(){
    return(
        <div className="avatar" >
            <img src={profile} alt="profile"/>
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
            <input type="text" className="tweet-editor-input" placeholder=" What's happening"/>
    ) 
}

function TwitterButtonForm (){
    return (<div className="tweet-editor-buttons">
        <TweeterEditorAction/>
        <Button/>
    </div>)
}

function Button (){
    return <div>
        <button className="button">Tweet</button>
    </div>
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