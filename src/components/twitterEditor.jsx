import React, { useContext, useState } from "react";
import iconGif from "../images/Gif.svg";
import iconMedia from "../images/Media.svg";
import iconPoll from "../images/Poll.svg";
import iconSchdule from "../images/Schedule.svg";
import Button from "./buttonTwitter";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import { TweetContext } from "./ContextDatas";





function TwitterEditor(){
    return (
        <div className="tweet-editor">
            <div> <Link to='/profile?profilTweet=src/images/profile.png&tweetTitle=undefined&tweetpseudo=undefined'><img src={profile} alt="profile"/></Link></div>
            <TweetEditorForm/>
        </div>
    )
}
function TweetEditorForm(){
    const [tweetDate, setTweetDate ]= useState(TweetContext);
    const [tweet, setTweet]= useState("");

    const handleclique = (e) =>{
        e.preventDefault();
        setTweet('');
        if(tweet.trim() !== " "){
            let tweetAdd = addTweet(tweet);
            setTweetDate([tweetAdd, ...tweetDate])
        }
    }
    const handleTweet = (e)=>{
        setTweet(e.target.value)
    }
    return(<div className="tweet-editor-form">
    <textarea className="tweet-editor-input" rows="4" cols="50" onChange={handleTweet} placeholder=" What's happening" value={tweet}></textarea>
    <div className="tweet-editor-buttons">
        <TweeterEditorAction/>
        <Button style= "button" onclick={handleclique}> Twitter</Button>
    </div>
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