import React from 'react'
import { Outlet } from 'react-router-dom'; // Import Outlet
import Header from './Header';
import Footer from './Footer';

function LayOut() {
    return (
        <>

            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayOut