import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Home', 
        path: '/', 
        icon: <AiIcons.AiFillHome/>,
        classname:  'nav-text'
    },
    {
        title: 'Artifacts', 
        path: '/artifacts', 
        icon: <BsIcons.BsFillGrid3X3GapFill/>,
        classname: 'nav-text'
    },
    {
        title: 'About', 
        path: '/about', 
        icon: <BsIcons.BsFillInfoCircleFill/>,
        classname: 'nav-text'
    },
    {
        title: 'Support', 
        path: '/support', 
        icon: <BsIcons.BsFillPeopleFill/>,
        classname: 'nav-text'
    }
]