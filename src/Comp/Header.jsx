import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import myImage from '../Image/undraw_Pic_profile_re_7g2h.png';
import Navbar from './Navbar';
import './headerstyle.css';

function Header() {
    const [isChecked, setIsChecked] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    const [isImage, setIsImage] = useState(false);
    const location = useLocation();
    const [selectImage, setSelectImage] = useState(myImage);
    const [myname, setMyname] = useState("قم بالتسجيل");

    const photo = localStorage.getItem("profileImage");
    const name = localStorage.getItem("name");

    // Function to handle checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };

    const handelLocalStorage = () => {
        localStorage.removeItem("name")
        localStorage.removeItem("profileImage")
    };

    // Function to handle file input change

    useEffect(() => {

        if (photo) {
            setSelectImage(photo);
            setIsImage(true)
        }
        else {
            setSelectImage(photo);
            setIsImage(false)
        }


    });
    useEffect(() => {


        if (name) {
            setMyname(name);
            setIsLogin(true)
        }
        else {
            setMyname("قم بالتسجيل");
            setIsLogin(false)

        }

    });

    useEffect(() => {
        setIsChecked(false)
    }, [location]);

    return (
        <>
            <header className='header'>
                <NavLink to="/" className="logoInfo">
                    <img src={require("../Image/logo.fe86b974.webp")} alt="logo" height={"60px"} />
                    <h3>مفهوم</h3>
                </NavLink>
                <ul>
                    <Navbar />
                </ul>
                <div className='authprofile'>
                    <div className='information'>
                        <div className='infoprofile'>
                            <h4>{myname ? myname : myname} </h4>
                            <span> طالب</span>
                        </div>
                        <div className='imageprofile'>
                            <img src={isImage ? selectImage : myImage} alt='ddddd' />
                            <div style={{ color: "#FF9001" }}>
                                <FaAngleDown size={25} />
                            </div>
                        </div>
                        <div className={isChecked ? "nonedetalis" : "detalis"} >
                            <Link to="/person" className='detalisInfo'>ملفي الشخصي</Link>
                            <Link to="/cash" className='detalisInfo'>محفظتي</Link>
                            <Link to="/Auth" className='detalisInfo' onClick={handelLocalStorage}>{isLogin ? "تسجيل الخروج" : "سجل دخول"}</Link>
                        </div>
                    </div>
                    <div className='container'>
                        <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" onChange={handleCheckboxChange} />
                        <label htmlFor="checkbox1">
                            <div className={`hamburger ${!isChecked ? "hamburger" : "hamburger1"} `}>
                                <span className="bar bar1"></span>
                                <span className="bar bar2"></span>
                                <span className="bar bar3"></span>
                                <span className="bar bar4"></span>
                            </div>
                        </label>
                    </div>
                </div>
            </header>
            <div className={isChecked ? "navbar" : "nonenavbsar"}>
                <Navbar />
            </div>

        </>
    )
}

export default Header;
