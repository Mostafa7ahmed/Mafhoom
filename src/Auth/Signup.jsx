import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import { Link, Outlet, useNavigate } from 'react-router-dom';
function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCon, setShowPasswordCon] = useState(false);
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const navigtor = useNavigate();


    const handleTogglePasswordCon = () => {
        setShowPasswordCon(!showPasswordCon);
    };
    const handleForm = (e) => {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        if (!password || !passwordConfirmation || !name) {
            Toast.fire({
                icon: "error",
                title: 'يجب ادخال جميع البيانات'
            });
        }
        else {
            Toast.fire({
                icon: "success",
                title: 'تم  تسجيل دخولك  بنجاح'
            });
            setPassword("");
            setPasswordConfirmation("");
            setName("");
            navigtor("/")
            localStorage.setItem("name", name)

        }
    };
    return (
        <form className="Form" onSubmit={handleForm} >

            <div class="input-group">
                <label for="username">الاسم</label>
                <div className="passwordInput">
                    <input
                        type='text'
                        className='falid'
                        placeholder=" ادخل اسمك"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                </div>
            </div>

            <div class="input-group">
                <label for="username">كلمه السر</label>
                <div className="passwordInputContainer">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='falid'
                        placeholder="كلمة السر  الجديده"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <IconButton onClick={handleTogglePassword} edge="end" className='IconButton'>
                        {showPassword ? <img width="20px" src={require("../Image/hidden.png")} alt="" /> : <img width="20px" src={require("../Image/eye.png")} alt="" />}
                    </IconButton>

                </div>

            </div>
            <div class="input-group">
                <label for="username"> تاكيد كلمه السر</label>
                <div className="passwordInputContainer">
                    <input
                        type={showPasswordCon ? 'text' : 'password'}
                        className='falid'
                        placeholder="كلمة السر  الجديده"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <IconButton onClick={handleTogglePasswordCon} edge="end" className='IconButton'>
                        {showPasswordCon ? <img width="20px" src={require("../Image/hidden.png")} alt="" /> : <img width="20px" src={require("../Image/eye.png")} alt="" />}
                    </IconButton>

                </div>

            </div>

            <button className='authbtn activebtn' type="submit" >انشاء حساب</button>
            <Link className='authbtn' to="/Auth"> تسجيل دخول</Link>

        </form>
    )
}

export default Signup