import React from 'react';
import Header from '../components/header';
import TwitterEditor from '../components/twitterEditor';
import TweetForm from '../components/tweet';

function Home() {
  return (
    <main className="timeline">
      <Header/>
      <TwitterEditor/>
      <TweetForm/>
    </main>
  );
}


export default Home;