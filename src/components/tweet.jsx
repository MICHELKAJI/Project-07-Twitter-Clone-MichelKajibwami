import React from "react";
import img from "../images/twetIcone.png";
import images from "../images/tweetimage.png";

function TweetForm (){
    return (
        <div>
            <Tweets/>
            <TweetContener/>
            <TweetSms/>
            <TweetSms1/>
            <TweetSms2/>
        </div>
    )
}
function Tweets (){
    return (
            <div className="tweet">
                <TweetProfil icon="src/images/tweetprofile.png"/>
            <div>
            <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
            <TweetText text= "Bonjour juste vous informer que suis pas d'humeur"/>
            <TweetActions/>
            </div>
        </div>
    )
}
function TweetProfil ({icon}){
    return <div className="avatar">
         <img src={icon} alt="logo tweet"/>

    </div>
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
        <img src={img} alt="Icon tweet" className="avatar"/>
    </div>)
}
function TweetBody (){
    return (
        <div className="tweettweet">
            <TweetTitle text="The New York Time" icon= "src/images/Group.svg" strong="Future@ 2h."/>
            <TweetText text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa odit illum iste. Suscipit impedit repudiandae facilis, autem sequi architecto ex, reprehenderit quia quidem et iusto dolores nisi consectetur? Sed."/>
            <TweetImage/>
            <TweetActions/>
        </div>
    )
}
function TweetTitle ({text, strong, icon}){
    return<div className="tweet-title">
        <h2 className="tweet-title-author">{text}</h2>
         <div className="">
        <img src={icon} alt="title tweet"/> 
    </div>
    <strong className="tweet-title-details">{strong}</strong>
    </div>
}
function TweetText ({text}){
    return <p className="tweet-text">
        {text}
        </p>
}

function TweetImage (){
    return (
        <div className="tweet-image">
            <img src={images} alt="imageTweet" />

        </div>
    )
}
function TweetAction({icon, value}){
    return (
        <div className="tweet-actions">
            <img src={icon} alt="Tweet"/> <span className="tweet-title-details">{value}</span>
        </div>
    )
}
function TweetActions(){
    return (
        <div className="tweet-action">
             <TweetAction icon= "src/images/Reply.svg" value="19"/>
            <TweetAction icon= "src/images/Retweet.svg" value="120"/>
            <TweetAction icon= "src/images/Like.svg" value="190"/>
            <TweetAction icon= "src/images/Downlord.svg"/>
        </div>
    )
}
function TweetSms (){
    return (
         <div className="tweet">
                <TweetProfil icon="src/images/twitter.svg"/>
            <div>
            <TweetTitle text="FUTURA" icon="src/images/Group.svg" strong="DevGroup 1h."/>
            <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter "/>
            <TweetActions/>
            </div>
            
        </div>
    )
}

function TweetSms1 (){
    return (
        <div className="tweet">
                <TweetProfil icon="src/images/twitter.svg"/>
            <div>
            <TweetTitle text="Kaji" icon="src/images/Group.svg" strong="Dev 1h."/>
            <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter "/>
            <TweetActions/>
            </div>
          
    </div>)
}
function TweetSms2 (){
    return (<div className="tweet">
                <TweetProfil icon="src/images/twitter.svg"/>
            <div>
            <TweetTitle text="Kaji" icon="src/images/Group.svg" strong="Dev 1h."/>
            <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter "/>
            <TweetActions/>
            </div>
          
    </div>)
}

export default TweetForm;