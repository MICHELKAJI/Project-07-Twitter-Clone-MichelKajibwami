import React from "react";
import profile from "../images/profile.png";

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
        <TwitterEditorAction/>
        <Button/>
    </div>)
}
function TwitterEditorAction (){
    return (<div className="tweet-editor-actions">
        iconk
    </div>)
}

function Button (){
    return <div>
        <button className="button">Tweet</button>
    </div>
}

export default TwitterEditor;