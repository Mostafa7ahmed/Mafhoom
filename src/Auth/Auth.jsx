import React from 'react';
import "./Auth.css"


import {Outlet } from 'react-router-dom';
function Auth() {


    return (
        <div className='Auth'>
            <div className="formContact">

                <img src={require("../Image/logo.fe86b974.webp")} alt="" />
                <h2>مرحبا بكم في مفهوم  اكاديمي</h2>
                <p>تعليم افضل بجودة افضل واقل الاسعار</p>
                <div className="centerForm">
                     <Outlet/>
                </div>
            </div>

        </div>
    )
}

export default Auth