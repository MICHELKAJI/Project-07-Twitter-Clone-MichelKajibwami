import React from 'react';
import Header from '../components/header';
import TwitterEditor from '../components/twitterEditor';
import TweetForm from '../components/tweet';
import Sidebare from '../components/sidebare';
import Trends from '../components/trends';



function Home() {
  return (
    <>
      <aside>
        <Sidebare/>
      </aside>
      <main className="timeline">
       <Header/>
       <TwitterEditor/>
       <TweetForm/>
     </main>
     <aside className='aside'>
     <Trends/>
     </aside>
    </>
    
  );
}


export default Home;