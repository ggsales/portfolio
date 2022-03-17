import React from 'react'
import { Link } from 'react-scroll/modules';
import MetisMenu from 'metismenujs';
import {useEffect, useLayoutEffect } from "react";

export default function NavBarMobile() {
    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);


    return (
        <nav className="mean-nav">
            <ul className="metismenu text-muted" id='metismenu'>
                <li>
                    <Link to='hero__area'
                        activeClass='actived-mobile'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Início
                    </Link>
                </li>

                <li>
                    <Link to="introduction__area"
                        activeClass='actived-mobile'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Introdução
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                        activeClass='actived-mobile'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Conhecimentos
                    </Link>
                </li>
                <li>
                    <Link to="cases"
                        activeClass='actived-mobile'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Cases
                    </Link>
                </li>

                <li>
                    <Link to="contact"
                        activeClass='actived-mobile'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>


    )
}
