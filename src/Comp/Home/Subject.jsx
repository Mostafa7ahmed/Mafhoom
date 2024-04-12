import React from 'react'
import { Link } from 'react-router-dom';
import "./subject.css";
import AllBooks from './AllBooks';
function Subject() {
    return (
        <div className="subject">
            <div className="subjectHeader">
                <img src={require("../../Image/BOOKS.webp")} alt="" />

                <p>المواد الدراسية المتوفرة حاليا</p>
            </div>
            <div className="subjectBook">

                <AllBooks />




            </div>

            <Link to="/subject" className='btn-subject'>
                <div className="outlined-btn">لمعرفة المزيد</div>
            </Link>

        </div>
    )
}

export default Subject