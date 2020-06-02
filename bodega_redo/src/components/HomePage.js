import React from 'react';
import "../components/Style/HomeStyle.scss"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavigationBar from "./NavigationBar"




function HomePage (){
    return (
       
        <div id="main-div-home-style"> 
        <NavigationBar/>
        <h1 id="h1-home-style"></h1>
        <h2 id="h2-home-style"></h2>
        <p  id="p-home-style"></p>
    
        </div>
        
    
    )
}

export default HomePage


  
