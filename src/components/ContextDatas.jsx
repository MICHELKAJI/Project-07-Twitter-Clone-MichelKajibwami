import { createContext, useContext } from 'react';
import Tweets from './tweet';


const datas = [
    {
        id: 1,
        autheur: "Michelkaji",
        profil: "src/images/profile.png",
        profilTweet: "src/images/tweetprofile.png",
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "CNN",
        tweetpseudo: "@MichelKaji 1h",
        iconTitle: "src/images/Group.svg",
        comment: 49,
        like: 100,
        retweet: 2
    },
    {

        id: 2,
        autheur: "Tukya",
        profil: "src/images/profile.png",
        profilTweet: "src/images/twetIcone.png",
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "New York Time",
        tweetpseudo: "@Tukya h1",
        iconTitle: "src/images/Group.svg",
        comment: 1000,
        like: 100,
        retweet: 2

    },
    {

        id: 3,
        autheur: "Tukya",
        profil: "src/images/profile.png",
        profilTweet: "src/images/twetIcone.png",
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "New York Time",
        tweetpseudo: "@Tukya h1",
        iconTitle: "src/images/Group.svg",
        comment: 0,
        like: 100,
        retweet: 2

    }
]
export const TweetContext = createContext();

export function ContextProvider({children}){
    
        // function mapTweet(){
        //     datas.map((tweets)=>{
        //         return
        //             tweets
                
        //     })
        // }
    return(
       
        <TweetContext.Provider value={datas}>
         {children}
        </TweetContext.Provider>
    )
}

// export function Tweet(){
//     const tweets = useContext(TweetContext)
//     return(<>
//       {tweets.map(tweets =>(<Tweets key={tweets.id}/>))}
//     </>    
           
//     )
// }




   
   