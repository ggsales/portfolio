import React from 'react'
import Link from 'next/link'
import MetisMenu from 'metismenujs';
import { useState, useEffect, useLayoutEffect } from "react";

export default function NavBarMobile() {
    const [tabCurrent, setTabCurrent] = useState("inicio")

    useEffect(() => {
        let pathName = window.location.pathname.split("/")[1]
        if(pathName === ""){
            setTabCurrent("inicio")
        }else{
            setTabCurrent(pathName)
        }

    }, []);

    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);

    
    return (
        <nav className="mean-nav">
            <ul className="metismenu text-muted" id='metismenu'>
                <li className={tabCurrent === "inicio" ? "actived-mobile" : undefined}><Link href="/"><a>Início</a></Link></li>
                <li className={tabCurrent === "introducao" ? "actived-mobile" : undefined}><Link href="/"><a>Introdução</a></Link></li>
                <li className={tabCurrent === "conhecimentos" ? "actived-mobile" : undefined}><Link href="/"><a>Conhecimentos</a></Link></li>  
                <li className={tabCurrent === "experiencia" ? "actived-mobile" : undefined}><Link href="/"><a>Experiências</a></Link></li>                 
                <li className={tabCurrent === "contato" ? "actived-mobile" : undefined}><Link href="/"><a>Contato</a></Link></li> 
            </ul>           
        </nav>


    )
}
