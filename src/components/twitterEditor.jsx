import React from "react";
import iconGif from "../images/Gif.svg";
import iconMedia from "../images/Media.svg";
import iconPoll from "../images/Poll.svg";
import iconSchdule from "../images/Schedule.svg";
import Button from "./buttonTwitter";
import ProfilAvatar from "./profilAvatar";



function TwitterEditor(){
    return (
        <div className="tweet-editor">
            <ProfilAvatar imag='src\images\profile.png' style='avatar'/>
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
            <input type="text" className="tweet-editor-input" placeholder=" What's happening"/>
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