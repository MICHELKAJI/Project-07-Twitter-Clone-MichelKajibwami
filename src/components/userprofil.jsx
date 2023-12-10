import ProfilAvatar from "./ProfilAvatar";
import Button from "./buttonTwitter";
import HeaderProfil from "./headerProfil";
import NavBarre from "./navBarre";
import TweetForm from "./tweet";

function UserProfile(){
    return(
        <div className="styleUserProfil">
            <div className="iconProfil">
                <div><ProfilAvatar imag='src\images\profile.png' style='avatares'/></div>
                <div><Button style= "buttone">Edit Profil</Button></div>
            </div>
            <div className="" >
                <HeaderProfil name="MichelKaji" soustitle="@MichelKaji"/>
            </div>
            <h3 className="titlesuser"><span className="tweet-text">160</span>Abonement</h3>
            <NavBarre/>
            <TweetForm/>
        </div>
    )
}
export default UserProfile;