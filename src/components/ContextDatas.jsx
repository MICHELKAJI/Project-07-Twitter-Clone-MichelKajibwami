import { createContext} from 'react';
export const TweetContext = createContext();

const datas = [
    {
        id: 1,
        autheur: "Michelkaji",
        profil: "src/images/profile.png",
        profilTweet: "src/images/profile.png",

        tweets: [{ 
       
        text: "Bonjour suis développeur fullstack",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "MichelKaji",
        tweetpseudo: "@MichelKaji 1h",
        iconTitle: "src/images/Group.svg",
        comment: 49,
        like: 100,
        retweet: 2}]

    },
    {
        id: 2,
        autheur: "Michelkaji",
        profil: "src/images/profile.png",
        profilTweet: "src/images/profile.png",

        tweets: [{ 
       
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "MichelKaji",
        tweetpseudo: "@MichelKaji 1h",
        iconTitle: "src/images/Group.svg",
        comment: 49,
        like: 100,
        retweet: 2}]
       
    },
    {

        id: 3,
        autheur: "Tukya",
        profil: "src/images/profile.png",
        profilTweet: "src/images/twetIcone.png",

        tweets:[{ 
        text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
        postImage: "src/images/tweetimage.png",
        tweetTitle: "New York Time",
        tweetpseudo: "@New York Time",
        iconTitle: "src/images/Group.svg",
        comment: 1000,
        like: 100,
        retweet: 2}]
    
    },
    {
        id: 4,
        autheur: "New York Time",
        profil: "src/images/profile.png",
        profilTweet: "src/images/twetIcone.png",
        tweets:[{
          
            text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
            postImage: "src/images/tweetimage.png",
            tweetTitle: "New York Time",
            tweetpseudo: "@New York Time",
            iconTitle: "src/images/Group.svg",
            comment: 0,
            like: 100,
            retweet: 2
        }]
       

    }
]

export function ContextProvider({children}){
    return(
       
        <TweetContext.Provider value={datas}>
         {children}
        </TweetContext.Provider>
    )
}






   
   