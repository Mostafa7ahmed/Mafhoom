import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <ul>
            <li>
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>الرئيسة</NavLink>
            </li>
            <li>
                <NavLink to="/about" >من نحن</NavLink>
            </li>
            <li>
                <NavLink to="/subject">المواد الدراسية</NavLink>
            </li>
            <li>
                <NavLink to="service">الخدمات</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">المدونة</NavLink>
            </li>
            <li>
                <NavLink to="/Contactus">تواصل معنا</NavLink>
            </li>
        </ul>
    )
}
