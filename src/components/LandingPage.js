import React from "react";
import { Link } from "react-router-dom";
import home from "../images/home.png"
export default function LandingPage({children}) {

    return <div id='home-page'>
        <div id='home-img'>
        <img src={home} alt='home-img' />
        </div>

        <div id='home-button'>
        <h2>10x Team 04</h2>
        <Link to={"/posts/all"}><button>Enter</button></Link>
        </div>
  </div>
}