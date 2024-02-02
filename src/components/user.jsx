import { TweetContext } from "./ContextDatas";
import { createContext, useContext, useState } from "react";
import { Downlod, TweetComment, TweetImage, TweetLike, TweetReply, TweetText, TweetTitle } from "./tweet";

const Tweetuser = createContext();

function UserTweet(){
    const  [filterDatas, setfilterDatas] = useState([]);
    const tweets = useContext(TweetContext)
    function handlclique(){
            const userFilter = tweets.filter((tweet) => tweet.id === 3)
            setfilterDatas(userFilter);
    }
    return   <div>
    {filterDatas.map(tweet=>
       
        <div className="tweet" key={tweet.id}>
       <Tweetuser.Provider value={tweet}>
         <TweetProfil onclick={()=>handlclique()} /> 
        <div className="tweet-content">
            <div className="tweet-body">
                <TweetTitle/>
                <TweetText/>
                <TweetImage/>
            </div>
            <div className="tweet-actions ">
                <TweetComment/>
                <TweetReply/>
                <TweetLike/>
                <Downlod/>
            </div>
        </div>
        </Tweetuser.Provider> 
    </div>
     )}
    </div>
   
}



export default UserTweet;