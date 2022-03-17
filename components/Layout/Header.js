import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from "react";
import NavBarMobile from './NavBarMobile';
import NavBarMain from './NavBarMain';
import { animateScroll } from 'react-scroll'

export default function Header() {
   const [isToggled, setToggled] = useState(false);
   const toggleTrueFalse = () => setToggled(!isToggled);
   const [currentNav, setCurrentNav] = useState("home")

   const [scroll, setScroll] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         setScroll(window.scrollY > 100);
      });
   }, [scroll]);


   return (
      <>
         <header>
            <div id="header-sticky" className={`header__area header__transparent-2 header__padding-2 ${scroll ? "sticky-2" : ""}`}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-8 col-xl-9 col-lg-9 d-none d-lg-block pt-10">
                        <div className="main-menu d-flex flex-row-reverse">
                           <NavBarMain />
                        </div>
                     </div>
                     {/*<div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-6">
                        <div className='d-flex align-items-center justify-content-end'>
                           <div className='select-wrapper fas fa-angle-down'>
                              <select defaultValue="" id="translate-btn">
                                 <option value=""></option>
                                 <option value="pt-br">PT-BR</option>
                                 <option value="en-us">EN-US</option>
                              </select>
                           </div>
                        </div>
                        </div> */}
                     <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-12 ">
                        <div className="header__right text-end d-flex align-items-center justify-content-end">
                           <div className="sidebar__menu d-lg-none">
                              <div onClick={setToggled} className="sidebar-toggle-btn" id="sidebar-toggle">
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={`sidebar__area ${!isToggled ? "" : "sidebar-opened"}`}>
                        <div className="sidebar__wrapper">
                           <div className="sidebar__close">
                              <button onClick={toggleTrueFalse} className="sidebar__close-btn" id="sidebar__close-btn">
                                 <span><i className="fal fa-times"></i></span>
                                 <span>close</span>
                              </button>
                           </div>
                           <div className="logo">
                              <Link href="/"><a>
                                 <img src="./img/nav/developer.png" alt="logo" /></a></Link>
                           </div>
                           <div className="sidebar__content">
                              <div className={`mobile-menu mean-container mt-80`}>
                                 <NavBarMobile />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={`body-overlay ${!isToggled ? "" : "opened"}`} onClick={toggleTrueFalse}></div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}
