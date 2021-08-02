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
        <header class = "flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div class = "flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title = 'Home' Icon = {HomeIcon} />
                <HeaderItem title = 'Search' Icon = {SearchIcon} />
                <HeaderItem title = 'hakkımızda' Icon = {UserIcon} />
                <HeaderItem title = 'Bestieee' Icon = {HomeIcon} />
                <HeaderItem title = 'arama' Icon = {SearchIcon} />
                <HeaderItem title = 'Account' Icon = {UserIcon} />


            </div>
        </header>
    )
}

export default Header
