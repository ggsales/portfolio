import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NavBarMain() {
    const [tabCurrent, setTabCurrent] = useState("inicio")
    
        

        useEffect(() => {
            let pathName = window.location.pathname.split("/")[1]
            if(pathName === ""){
                setTabCurrent("inicio")
            }else{
                setTabCurrent(pathName)
            }

        }, []);
    

    return (
        <nav>
            <ul>
                <li  className={tabCurrent === "inicio" ? "actived" : undefined}><Link href="/"><a>Início</a></Link></li>
                <li  className={tabCurrent === "introducao" ? "actived" : undefined}><Link  href="/"><a>Introdução</a></Link></li> 
                <li  className={tabCurrent === "conhecimentos" ? "actived" : undefined}><Link  href="/"><a >Conhecimentos</a></Link></li>                 
                <li  className={tabCurrent === "experiencias" ? "actived" : undefined}><Link href="/"><a>Experiências</a></Link></li> 
                <li  className={tabCurrent === "contato" ? "actived" : undefined}><Link href="/"><a>Contato</a></Link></li> 
            </ul>
        </nav>


    )
}
