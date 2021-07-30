import React from 'react'
import {
    HomeIcon,
    UserIcon, 
    SearchIcon

} from "@heroicons/react/outline"; 

// import MuseumIcon from "../images/museumicon.jpg";
import HeaderItem from "./HeaderItem"; 
import '../styles/main.css'; 

function Header() {
    return (
        <header className = "">
            <div class = "flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title = 'Home' Icon = {HomeIcon} />
                <HeaderItem title = 'Search' Icon = {SearchIcon} />
                <HeaderItem title = 'User' Icon = {UserIcon} />


            </div>
            <h1> This is the header </h1> 
        </header>
    )
}

export default Header
