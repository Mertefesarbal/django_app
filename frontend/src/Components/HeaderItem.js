import React from 'react'

function HeaderItem({Icon, title}) {
    return (
        <div class = "flex flex-col items-center cursor-pointer group w-12 sm:w-20">
           <Icon class = "h-8 group-hover:animate-bounce"/>
           <p class = "opacity-0 group-hover:opacity-100 tracking-widest">{title}</p> 
        </div>
    )
}

export default HeaderItem
