import React from 'react'
import "./subject.css"
import Banner from '../About/Banner'

import Book from '../Home/Book'
import AllBooks from '../Home/AllBooks'
function Subject() {
    return (

        <>
            <Banner Titele=" المواد الدراسيه" dec="تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج"
                classbanner="bannerSubject" />

            <div className="centerSubject">
                <div className="subjectBook">

                    <AllBooks />
                    <AllBooks />





                </div>
            </div>


        </>

    )
}

export default Subject