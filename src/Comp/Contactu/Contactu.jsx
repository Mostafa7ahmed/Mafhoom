import React, { useState } from "react";
import Banner from '../About/Banner'
import "./Contactu.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import "./Contactu.css"
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';


const theme = createTheme({
    direction: 'rtl',
});

// Emotion cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function Contactu() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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

    const handleContact = (e) => {
        e.preventDefault();
        if (!username || !email) {
            Toast.fire({
                icon: "error",
                title: 'يجب ادخال جميع البيانات'
            });
        }
        else {
            // Your submission logic here
            Toast.fire({
                icon: "success",
                title: 'تم إرسال النموذج بنجاح'
            });
            // Reset form fields
            setUsername("");
            setEmail("");
            setMessage("");

        }
    }

    return (
        <>
            <Banner Titele="تواصل معنا" dec="بامكانك التواصل معنا بكل سهولة " classbanner="bannerContactus" showbtn={true} />

            <div className="Contactu">
                <div className="infoContact">
                    <h1>اترك رسالتك</h1>
                    <img src={require("../../Image/logo.fe86b974.webp")} alt="" />

                </div>
                <div className="formContactus">
                    <form onSubmit={handleContact} >
                        <CacheProvider value={cacheRtl}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    className=' mb-3  faild'
                                    label="اسم المستخدم"
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#ff9101",
                                            fontFamily: "Arial",
                                            fontWeight: "500",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#356DFE",
                                                borderWidth: "1px",
                                            },
                                        },
                                        "& .MuiInputLabel-outlined": {
                                            color: "#ff9101",
                                            fontSize: "1rem",
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#356DFE",
                                                borderWidth: "3px",
                                            },
                                        },
                                    }}
                                />

                                <TextField
                                    className='mb-3 faild'
                                    label="البريد الإلكتروني"
                                    variant="outlined"
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#ff9101",
                                            fontFamily: "Arial",
                                            fontWeight: "500",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#356DFE",
                                                borderWidth: "1px",
                                            },
                                        },
                                        "& .MuiInputLabel-outlined": {
                                            color: "#ff9101",
                                            fontSize: "1rem", // Add font size for label
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#356DFE",
                                                borderWidth: "3px",
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    className='mb-3 faild'
                                    label="رسالتك"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            color: "#000000",
                                            fontFamily: "Arial",
                                            fontWeight: "500",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#356DFE",
                                                borderWidth: "1px",
                                            },
                                        },
                                        "& .MuiInputLabel-outlined": {
                                            color: "#356DFE",
                                            fontSize: "1rem", // Add font size for label
                                        },
                                        "&.Mui-focused": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#356DFE",
                                                borderWidth: "3px",
                                            },
                                        },
                                    }}
                                />


                                <button type="submit" className="submitbtn">
                                    تواصل معنا
                                </button>
                            </ThemeProvider>
                        </CacheProvider>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contactu;
