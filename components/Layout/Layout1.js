import React, { Children, useEffect } from 'react'
import Header from "./Header";
import Head from 'next/head'

export default function Layout1({children,className}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
