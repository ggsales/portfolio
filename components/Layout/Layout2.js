import React, { Children } from 'react'
import Footer from '../Elements/Footer/Footer';

export default function Layout2({children}) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}
