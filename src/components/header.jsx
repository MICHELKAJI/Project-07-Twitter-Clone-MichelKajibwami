import React from "react";



function Header (){
    return (
        <>
        <header className = "header">
            <Title/>
            <TopTweet/>

        </header>
        </>
    );
}

function TopTweet (){
    return <b className="top-tweets"> Icon</b>
}

function Title (){
    return <h1 className="page-title">Home</h1>
};


export default Header;