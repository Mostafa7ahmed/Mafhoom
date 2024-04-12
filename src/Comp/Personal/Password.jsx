import React, { useState } from 'react';

import { IconButton, InputAdornment } from '@mui/material';
import "./Personal.css"; // Assuming you have some custom styles defined here

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Password() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordCon, setShowPasswordCon] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const navigtor = useNavigate();
    const handleTogglePasswordNew = () => {
        setShowPasswordNew(!showPasswordNew);
    };

    const handleTogglePasswordCon = () => {
        setShowPasswordCon(!showPasswordCon);
    };
    const handlePassword = (e) => {
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

        if (!password || !passwordNew || !passwordConfirmation) {
            Toast.fire({
                icon: "error",
                title: 'يجب ادخال جميع البيانات'
            });
        } else if (passwordNew !== passwordConfirmation) {
            Toast.fire({
                icon: "error",
                title: 'كلمتا المرور غير متطابقتان'
            });
        } else if (password === passwordNew) {
            Toast.fire({
                icon: "error",
                title: 'يجب أن تكون كلمة سر مختلفة'
            });
        } else {
            // Your submission logic here
            Toast.fire({
                icon: "success",
                title: 'تم تغير كلمة سر بنجاح'
            });
            // Reset form fields
            setPassword("");
            setPasswordNew("");
            setPasswordConfirmation("");
            navigtor("/person")
        }
    };

    return (
        <div className="formContactus">
            <form onSubmit={handlePassword}>
                <div className="passwordInputContainer">

                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='falid'
                        placeholder="كلمة السر"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <IconButton onClick={handleTogglePassword} edge="end" className='IconButton'>
                        {showPassword ? <img width="20px" src={require("../../Image/hidden.png")} alt="" /> : <img width="20px" src={require("../../Image/eye.png")} alt="" />}
                    </IconButton>

                </div>
                <div className="passwordInputContainer">

                    <input
                        type={showPasswordNew ? 'text' : 'password'}
                        className='falid'
                        placeholder="كلمة السر  الجديده"
                        value={passwordNew}
                        onChange={(e) => setPasswordNew(e.target.value)}
                    />
                    <IconButton onClick={handleTogglePasswordNew} edge="end" className='IconButton'>
                        {showPasswordNew ? <img width="20px" src={require("../../Image/hidden.png")} alt="" /> : <img width="20px" src={require("../../Image/eye.png")} alt="" />}
                    </IconButton>

                </div>
                <div className="passwordInputContainer">

                    <input
                        type={showPasswordCon ? 'text' : 'password'}
                        className='falid'
                        placeholder="تاكيد كلمه السر"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                    <IconButton onClick={handleTogglePasswordCon} edge="end" className='IconButton'>
                        {showPasswordCon ? <img width="20px" src={require("../../Image/hidden.png")} alt="" /> : <img width="20px" src={require("../../Image/eye.png")} alt="" />}
                    </IconButton>

                </div>

                <button type="submit" className="submitbtn">
                    حفظ
                </button>
            </form>
        </div>
    );
}

export default Password;
