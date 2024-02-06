function addTweet(tweet){
    let key = Math.random()*1000;
    let newTweets = {
        id: key,
        autheur: "Michelkaji",
        profil: tweetProfil,
        profilTweet: "src/images/profile.png",
        text: tweet,
        postImage: null,
        tweetTitle: "MichelKaji",
        tweetpseudo: "@MichelKaji 1h",
        iconTitle: "src/images/Group.svg",
        comment: 0,
        like: 0,
        retweet: 0 
    }
    return newTweets
}
export default addTweet;