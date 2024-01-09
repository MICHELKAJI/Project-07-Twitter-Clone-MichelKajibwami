import React from "react";
import images from "../images/Reply.svg";
import iconLike from "../images/Like.svg";
import iconRetweet from "../images/Retweet.svg";
import iconDownload from "../images/Downlord.svg"


function Tweets() {
    return (
        <div>
            {datas.map(tweet => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))

            }
        </div>
    )
}
<<<<<<< HEAD
      function TweetOne (){
      return ( 
        <div className="tweet">
                <TweetProfil icon="src/images/tweetprofile.png"/>
                 <div className="tweet-content">
                   <div className="tweet-body">
                   <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
                   <TweetText text= "Bonjour juste vous informer que suis pas d'humeur"/>
                </div>
                    <TweetActions/>
              </div>
=======
function Tweet({tweet}) {
    return (
        <div className="tweet">
            <TweetProfil icon={tweet.profilTweet} />

            <div className="tweet-content">
                <div className="tweet-body">
                    <TweetTitle text={tweet.tweetTitle} icon={tweet.iconTitle} strong={tweet.tweetpseudo}  />
                    <TweetText text={tweet.text} />
                    <TweetImage images={tweet.postImage}/>
                </div>
                <div className="tweet-actions">
            <TweetAction icon={images} value={tweet.comment} />
            <TweetAction icon={iconRetweet} value={tweet.retweet} />
            <TweetAction icon={iconLike} value={tweet.like} />
            <TweetAction icon={iconDownload} />
>>>>>>> dev
        </div>
            </div>
        </div>

    )
}
<<<<<<< HEAD

      function TweetTow(){
      return (
        <div className="tweet">
                <TweetProfil icon="src\images\twetIcone.png"/>
               <div className="tweet-content">
               <div className="tweet-body">
                 <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
                 <TweetText text= "Bonjour juste vous informer que suis pas d'humeur"/>
                 <TweetImage/>
             </div>
             <TweetActions/>
               </div>
        </div>
    )};

        function TweetThree (){
       return (
        <div className="tweet">
        <TweetProfil icon="src/images/twitter.svg"/>
       <div className="tweet-content">
       <div className="tweet-body">
         <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@1h."/>
         <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter"/>
     </div>
     <TweetActions/>
       </div>
</div> )
}

      function TweetFor (){
       return (
        <div className="tweet">
            <TweetProfil icon="src/images/twitter.svg"/>
            <div className="tweet-content">
            <div className="tweet-body">
             <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
            <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter"/>
     </div>
      <TweetActions/>
    </div>
</div>)}

function TweetFive (){
    return (
            <div className="tweet">
                <TweetProfil icon="src/images/twitter.svg"/>

               <div className="tweet-content">
               <div className="tweet-body">
                 <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
                 <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter"/>
             </div>
             <TweetActions/>
               </div>
        </div>
        )}

function TweetTitle ({text, strong, icon}){
    return<div className="tweet-title">
=======
function TweetTitle({ text, strong, icon }) {
    return <div className="tweet-title">
>>>>>>> dev
        <h2 className="tweet-title-author">{text}</h2>
        <div className="">
            <img src={icon} alt="title tweet" />
        </div>
        <strong className="tweet-title-details">{strong}</strong>
    </div>
}
function TweetText({ text }) {
    return (
        <div className="tweet-text">
            <p >
                {text}
            </p>

        </div>
    )}

function TweetImage({images}) {
    return (
        <div className="tweet-image">
            <img src={images} alt="imageTweet" />

        </div>
    )
}

function TweetAction({ icon, value }) {
    return (
        <div className="tweet-action">
            <div><img src={icon} alt="Tweet" /></div> <span className="tweet-title-details">{value}</span>
        </div>
    )
}

function TweetProfil({ icon }) {
    return (
        <div className="tweet-avatar">
            <img src={icon} alt="logo tweet" />

        </div>
    )
}
const datas = [
    {
        id: 1,
        autheur: "Michelkaji",
        profil: "src/images/profile.png",
        profilTweet:"src/images/tweetprofile.png",
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "CNN",
        tweetpseudo: "@MichelKaji 1h",
        iconTitle : "src/images/Group.svg",
        comment : 49,
        like : 100,
        retweet : 2
    },
    {
        
            id: 2,
            autheur: "Tukya",
            profil: "src/images/profile.png",
            profilTweet:"src/images/twetIcone.png",
            text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
            postImage: "src/images/tweetimage.png",
            tweetTitle: "New York Time",
            tweetpseudo: "@Tukya h1",
            iconTitle : "src/images/Group.svg",
            comment : 1000,
            like : 100,
            retweet : 2
        
    }
]

export default Tweets;

