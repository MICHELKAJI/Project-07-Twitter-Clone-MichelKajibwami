import Button from "./buttonTwitter";
import HeaderProfil from "./headerProfil";
import NavBarre from "./navBarre";
import { TweetFilter, TweetProfil } from "./tweet";



function UserProfile(){
  return (
    <div className="styleUserProfil">
      <div className="iconProfil">
        <div><TweetProfil/></div>
        <div><Button style="buttone">Edit Profil</Button></div>
      </div>
      <div className="" >
        <HeaderProfil name="MichelKaji" soustitle="@MichelKaji" />
      </div>
      <h3 className="titlesuser"><span className="tweet-text">160</span>Abonement</h3>
      <NavBarre />
      <TweetFilter/>
    </div>
  )
}
export default UserProfile;