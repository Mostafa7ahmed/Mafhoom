import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import "./Footer.css"
function Footer() {
    return (

        <div className="footer">
            <div className="right">
                <img src={require("../Image/slide-removebg-preview.webp")} alt="" />

                <p><span>مفهوم</span>  دايما معاك لمستقبل افضل</p>
            </div>
            <div className="Listcontact">
                <p>شروط التواصل</p>
                <ul>
                    <li>نبذة عنا</li>
                    <li>الاتصال بنا</li>
                    <li>سياسة الخصوصية </li>
                    <li>الشروط والاحكام</li>
                </ul>

            </div>
            <div className="left">
                <p>قنوات التواصل</p>
                <div className="social">
                    <span>
                        <FaFacebookF className='icons' />
                    </span>
                    <span>
                        <CiInstagram className='icons' />
                    </span>

                    <span>
                        <CiYoutube className='icons' />
                    </span>
                </div>



            </div>
        </div>
    )
}

export default Footer