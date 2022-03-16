import React from 'react'
import { Link } from 'react-scroll/modules';
import MetisMenu from 'metismenujs';
import { useState, useEffect, useLayoutEffect } from "react";

export default function NavBarMobile() {
    const [tabCurrent, setTabCurrent] = useState("inicio");

    const handleNextCurrent = (currentItem) => {
        setTabCurrent(currentItem)
    }



    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);


    return (
        <nav className="mean-nav">
            <ul className="metismenu text-muted" id='metismenu'>
                <li>
                    <Link to='hero__area'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "inicio" ? "actived-mobile" : undefined}
                        onClick={() => handleNextCurrent("inicio")}>
                        Início
                    </Link>
                </li>

                <li>
                    <Link to="introduction__area"
                        spy={true} smooth={true}
                        duration={500}
                        className={tabCurrent === "introduction" ? "actived-mobile" : undefined}
                        onClick={() => handleNextCurrent("introduction")}>
                        Introdução
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "skills" ? "actived-mobile" : undefined}
                        onClick={() => handleNextCurrent("skills")}>
                        Conhecimentos
                    </Link>
                </li>
                <li>
                    <Link to="cases"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "cases" ? "actived-mobile" : undefined}
                        onClick={() => handleNextCurrent("cases")}>
                        Experiências
                    </Link>
                </li>

                <li>
                    <Link to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "contact" ? "actived-mobile" : undefined}
                        onClick={() => handleNextCurrent("contact")}>
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>


    )
}
