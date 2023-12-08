import React from "react";
import Sidebare from "../components/sidebare";
import Trends from "../components/trends";
import HeaderProfil, { BannerProfil } from "../components/headerProfil";
import ProfilAvatar from "../components/ProfilAvatar";

function Profil(){
    return(
        <>
        <aside>
          <Sidebare/>
        </aside>
        <main className="timeline">
            <HeaderProfil name= "MichelKaji"/>
            <BannerProfil/>
            

       </main>
       <aside className='asideTow'>
       <Trends/>
       </aside>
      </>
        
    )
}
export default Profil;