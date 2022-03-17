import React from 'react'
import { Link } from 'react-scroll/modules';

export default function NavBarMain() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='hero__area'
                        activeClass='actived'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Início
                    </Link>
                </li>

                <li>
                    <Link to="introduction__area"
                        activeClass='actived'
                        spy={true} smooth={true}
                        duration={500}>
                        Introdução
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                        activeClass='actived'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Conhecimentos
                    </Link>
                </li>
                <li>
                    <Link to="cases"
                        activeClass='actived'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Cases
                    </Link>
                </li>
                <li>
                    <Link to="contact"
                        activeClass='actived'
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
