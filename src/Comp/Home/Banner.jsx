import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='banner'>

            <div className="info">
                <h2 className="title">
                    منصة مفهوم
                </h2>
                <p>
                    تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج

                </p>

                <Link to="/Contactus" variant="outlined" className='btn'>
                    تواصل معانا
                </Link>

            </div>

        </div >
    )
}

export default Banner