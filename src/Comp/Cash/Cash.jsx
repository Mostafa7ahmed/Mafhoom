import React from 'react'
import Banner from '../About/Banner'
import "./Cash.css"
import { SiVodafone } from "react-icons/si";

function Cash() {
    return (
        <div className='Cash'>
            <Banner Titele=" محفظتي " dec="تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج"
                classbanner="bannerCash" />
            <div className="cashphoto">
                <img src={require("../../Image/cash.png")} alt="" />
            </div>

            <div className="cardCash">
                <div className="pushmoney">

                    <div className="title">

                        <img src={require("../../Image/cash-on-delivery.png")} alt="" />
                        <h2>فودافون كاش</h2>
                    </div>

                    <button className="btn">
                        ادفع

                    </button>



                </div>
                <div className="pushmoney">

                    <div className="title">
                        <img src={require("../../Image/visa.png")} alt="" />

                        <h2>الدفع اونلاين </h2>
                    </div>
                    <button className="btn">
                        ادفع

                    </button>


                </div>
            </div>
        </div>
    )
}

export default Cash