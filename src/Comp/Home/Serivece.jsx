import React from 'react'
import Slider from './SliderService';
import "./servive.css"
import { Link } from 'react-router-dom';
function Serivece() {
    return (
        <div className="service">
            <div className="serviceHeader">
                <img src={require("../../Image/Vector.webp")} alt="" />
                <h3>الخدمات والمميزات</h3>
                <p>ﺗﻌﻠﻢ ﺑﺄﺣﺪث اﻟﻄﺮق ﻣﻦ ﺧﻠﺎل ﻣﻨﺼﺘﻨﺎ,ﻓﺄﻧﻨﺎ ﻧﻮﻓﺮ ﻟﻚ اﻟﻌﺪﻳﺪ ﻣﻦ اﻟﻜﻮرﺳﺎت اﻟﺨﺎﺻﺔ</p>
            </div>
            <Slider show={true} />

            <Link to="/service" className='btn-subject'>
                <div className="outlined-btn">لمعرفة المزيد</div>
            </Link>


        </div>
    )
}

export default Serivece