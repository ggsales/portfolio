import React, { Children, useEffect } from 'react'
import Header from "./Header";

export default function Layout1({children,className}) {
    return (
        <>
            <Header />
            {children}
            
        </>
    )
}
