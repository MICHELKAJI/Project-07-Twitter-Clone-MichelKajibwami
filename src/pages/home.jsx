import React from 'react';
import Header from '../components/header';
import TwitterEditor from '../components/twitterEditor';
import Tweets from '../components/tweet';
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
       <Tweets/>
     </main>
     <aside className='asideTow'>
     <Trends/>
     </aside>
    </>
    
  );
}


export default Home;