import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./Personal.css"
import myImage from '../../Image/undraw_Pic_profile_re_7g2h.png';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Profile() {
    const [selectImage, setSelectImage] = useState(myImage);
    const [isImage, setIsImage] = useState(false);
    const photo = localStorage.getItem("profileImage");
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
    useEffect(() => {

        if (photo) {
            setSelectImage(photo);
            setIsImage(true)
        }
        else {
            localStorage.removeItem("profileImage");
            setIsImage(false)
        }


    }, []);



    const saveImageToLocalStorage = () => {
        localStorage.setItem('profileImage', selectImage);
        if (selectImage) {
            Toast.fire({
                icon: "success",
                title: 'تم تغير  الصورة بنجاح'
            });
        }
    };

    return (
        <div className='Profile'>
            <div className="Profilecard">
                <div className="imgconvert">
                    <img src={selectImage} alt="" />
                </div>
                <div className="iconsss">
                    <FontAwesomeIcon className='iconsfile' icon={faPenToSquare} color="#ff9600" />
                </div>
                <input
                    type="file"
                    className='inputfile'
                    accept='image/*'
                    onChange={(e) => {
                        const file = e.target.files?.[0];
                        setSelectImage(file ? URL.createObjectURL(file) : undefined)
                    }}
                />
                <Link to="/person" type="button" className="submitbtn" onClick={saveImageToLocalStorage}>
                    حفظ
                </Link>
            </div>
        </div>
    );
}

export default Profile;
