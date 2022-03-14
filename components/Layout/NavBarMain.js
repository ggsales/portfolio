import React from 'react'
import { Link } from 'react-scroll/modules';
import { useState, useEffect } from 'react'

export default function NavBarMain() {
    const [tabCurrent, setTabCurrent] = useState("inicio")

    const handleNextCurrent = (currentItem) => {
        setTabCurrent(currentItem)
    }




    return (
        <nav>
            <ul>
                <li>
                    <Link to='hero__area'
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "inicio" ? "actived" : undefined}
                        onClick={() => handleNextCurrent("inicio")}>
                        Início
                    </Link>
                </li>

                <li>
                    <Link to="introduction__area"
                        spy={true} smooth={true}
                        duration={500}
                        className={tabCurrent === "introduction" ? "actived" : undefined}
                        onClick={() => handleNextCurrent("introduction")}>
                        Introdução
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "skills" ? "actived" : undefined}
                        onClick={() => handleNextCurrent("skills")}>
                        Conhecimentos
                    </Link>
                </li>
                <li>
                    <Link to="cases"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className={tabCurrent === "cases" ? "actived" : undefined}
                        onClick={() => handleNextCurrent("cases")}>
                        Experiências
                    </Link>
                </li>

                <li>
                    <Link to="contato" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className={tabCurrent === "contact" ? "actived" : undefined}
                        onClick={() => handleNextCurrent("contact")}>
                        Contato
                    </Link>
                </li>
                
            </ul>
        </nav>


    )
}
