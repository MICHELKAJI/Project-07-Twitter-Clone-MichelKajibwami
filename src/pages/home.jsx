import React from 'react';
 import Stars from '../images/Stars.png';


function Home() {
  return (
    <main className="timeline">
      <h1>Home</h1>
     <img src = {Stars} alt='logo etoil' className='top-tweets'/>
    </main>
  );
}

export default Home;