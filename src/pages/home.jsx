import React from 'react';
import Header from '../components/header';
import TwitterEditor from '../components/twitterEditor';
import TweetForm from '../components/tweet';
import Sidebare from '../components/sidebare';



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
     <aside>
      <h1>Hello</h1>
     </aside>
    </>
    
  );
}


export default Home;