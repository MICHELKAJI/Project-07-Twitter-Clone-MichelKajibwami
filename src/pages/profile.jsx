import React from "react";
import Sidebare from "../components/sidebare";
import Trends from "../components/trends";
import HeaderProfil, { BannerProfil } from "../components/headerProfil";
import UserProfile from "../components/userprofil";


function Profil(){
    return(
        <>
        <aside>
          <Sidebare/>
        </aside>
        <main className="timeline">
            <HeaderProfil name= "MichelKaji"/>
            <BannerProfil/>
            <UserProfile/>
       </main>
       <aside className='asideTow'>
       <Trends/>
       </aside>
      </>
        
    )
}
export default Profil;