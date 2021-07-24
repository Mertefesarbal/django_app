import {React,useState } from 'react'
import * as bsIcons from "react-icons/bs"; // bootstrap icons
import {Link} from 'react-router-dom'; 
import * as AiIcons from "react-icons/ai"; 
import {SidebarData} from './SidebarData'; 
import './Navbar.css'; 
function Navbar() {
    const [sidebar, setSidebar] = useState(false); 
    const showSidebar = () => setSidebar(!sidebar); 

    return (
        <div>
            <div className = "navbar">
                <Link to = "#" className = 'menu-bars'>
                    <bsIcons.BsJustify onClick = {showSidebar}/>
                </Link>
            </div>

            <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items'>
                    <li className = 'navbar-toggle'>
                        <Link to = '#' className = "menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link> 
                    </li>
                    {SidebarData.map((item,index) => {
                        return(
                            <li key = {index} className = 'item.classname'>
                                <Link to = {item.path}>
                                    {item.icon} 
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> 

        </div>
     
    )
}

export default Navbar
