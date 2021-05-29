import React from 'react'
import wallpaper from '../img/wallpaper.jpg'


export const Home = () => {
    return (
        <div className="home-container" >
            <br/><br/>
       <h1>
        <center>
             Welcome to College Information Portal
        </center>
        </h1>
        <img src={wallpaper} alt="not found"/>
       </div>
    )
}
