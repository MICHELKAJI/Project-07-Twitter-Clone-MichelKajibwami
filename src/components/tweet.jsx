import React from "react";
import images from "../images/tweetimage.png";

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
function Tweet({tweet}) {
    return (
        <div className="tweet">
            <TweetProfil icon={tweet.postImage} />

            <div className="tweet-content">
                <div className="tweet-body">
                    <TweetTitle text={tweet.tweetTitle} icon="src/images/Group.svg" strong="Tukya@ 1h." />
                    <TweetText text={tweet.text} />
                </div>
                <TweetActions />
            </div>
        </div>

    )
}
// function TweetOne (){
//     return (

//     )
// }

// function TweetTow(){
//     return (
//         <div className="tweet">
//                 <TweetProfil icon="src\images\twetIcone.png"/>
//                <div className="tweet-content">
//                <div className="tweet-body">
//                  <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
//                  <TweetText text= "Bonjour juste vous informer que suis pas d'humeur"/>
//                  <TweetImage/>
//              </div>
//              <TweetActions/>
//                </div>
//         </div>

//     )
// };

// function TweetThree (){
//     return (
//         <div className="tweet">
//         <TweetProfil icon="src/images/twitter.svg"/>

//        <div className="tweet-content">
//        <div className="tweet-body">
//          <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
//          <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter"/>
//      </div>
//      <TweetActions/>
//        </div>
// </div> )
// }

// function TweetFor (){
//     return (
//         <div className="tweet">
//         <TweetProfil icon="src/images/twitter.svg"/>

//        <div className="tweet-content">
//        <div className="tweet-body">
//          <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
//          <TweetText text= ""/>
//      </div>
//      <TweetActions/>
//        </div>
// </div>)}

// function TweetFive (){
//     return (
//             <div className="tweet">
//                 <TweetProfil icon="src/images/twitter.svg"/>

//                <div className="tweet-content">
//                <div className="tweet-body">
//                  <TweetTitle text="CNN" icon="src/images/Group.svg" strong="Tukya@ 1h."/>
//                  <TweetText text= "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter"/>
//              </div>
//              <TweetActions/>
//                </div>
//         </div>
//         )
// }

function TweetTitle({ text, strong, icon }) {
    return <div className="tweet-title">
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
    )
}

function TweetImage() {
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
function TweetActions() {
    return (
        <div className="tweet-actions">
            <TweetAction icon="src/images/Reply.svg" value="19" />
            <TweetAction icon="src/images/Retweet.svg" value="120" />
            <TweetAction icon="src/images/Like.svg" value="190" />
            <TweetAction icon="src/images/Downlord.svg" />
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
        profil: "src\images\profile.png",
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter",
        postImage: "src\images\tweetimage.png",
        tweetTitle: "CNN",
        tweetpseudo: "@CNN"
    }
]




export default Tweets;

