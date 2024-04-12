import React from 'react'
import Banner from '../About/Banner'
import "./service.css"
function Serviece() {
    return (
        <div className=''>
            <Banner Titele="الخدمات والمميزات" dec="نحن نقدم لكم افضل الخدمات والمميزات التي تقودك الي اعلي مستويات التفوق" classbanner="bannerserivece" />


            <div className="serivece">
                <div className="serviceCard">

                    <h3>كورسات مميزة</h3>
                    <img src={require("../../Image/matrial.webp")} alt="" />

                </div>
                <div className="serviceCard">

                    <h3> فيديوهات عالية الجودة</h3>
                    <img src={require("../../Image/youtube.webp")} alt="" />

                </div>
                <div className="serviceCard">

                    <h3>اختبارات وواجبات  </h3>
                    <img src={require("../../Image/pepople.webp")} alt="" />


                </div>
                <div className="serviceCard">

                    <h3> تقييم مستمر</h3>
                    <img src={require("../../Image/explain.webp")} alt="" />

                </div>
                <div className="serviceCard">

                    <h3>كورسات مميزة</h3>
                    <img src={require("../../Image/matrial.webp")} alt="" />

                </div>
                <div className="serviceCard">

                    <h3> بنك الاسئلة</h3>
                    <img src={require("../../Image/quation.webp")} alt="" />


                </div>
            </div>
        </div>
    )
}

export default Serviece