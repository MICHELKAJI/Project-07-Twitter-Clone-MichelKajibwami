function Sidebare(){
    return(
        <div className="sidebar">
             
            <IconSidebar icon ="src\images\TwitterS.svg" text=""/>
            <IconSidebar icon="src\images\Home-Fill.svg" text ="Home"/>
            <IconSidebar icon="src\images\Explore.svg" text ="Explore"/>
            <IconSidebar icon="src\images\Notifications.svg" text ="Notifications"/>
            <IconSidebar icon="src\images\Messages.svg" text ="Message"/>
            <IconSidebar icon="src\images\Bookmarks.svg" text ="Bookmarks"/>
            <IconSidebar icon="src\images\Lists.svg" text ="Lists"/>
            <IconSidebar icon="src\images\Profiles.svg" text ="Profile"/>
            <IconSidebar icon="src\images\More.svg" text ="More"/>

        </div>
    ) 
}

function IconSidebar({icon, text}){
    return(
        <div className="sidebarIcon">
            <img src={icon} alt="icon" />
            <h3>{text}</h3>
        </div>
    )
}

export default Sidebare;