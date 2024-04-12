import React from 'react'
import Banner from '../About/Banner'
import { Outlet } from 'react-router-dom'; // Import Outlet
import { NavLink } from 'react-router-dom';
import "./Personal.css"
function Personal() {
    return (
        <>
            <Banner Titele="الملف اشخصي " dec="قم بتعديل ملفك الشخصي بكل سهولة وتغيير كلمة المرور" classbanner="bannerbersonal" />

            <div className="infoChange">

                <ul>

                    <li>
                        <NavLink to="profile" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "activeperson" : "pending"
                        }>
                            <h2>البيانات الشخصية </h2>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="password"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "activeperson" : "pending"
                            }>
                            <h2>كلمة المرور  </h2>
                        </NavLink>
                    </li>
                </ul>

            </div>
            <Outlet />
        </>
    )
}

export default Personal