import React from 'react'
import Slider from './SliderService';
import "./Blogs.css"
function Blogs() {
    return (
        <div className="Blogs">
            <div className="BlogsHeader">
                <h3>المدونة</h3>
                <p>ﺗﻌﻠﻢ ﺑﺄﺣﺪث اﻟﻄﺮق ﻣﻦ ﺧﻠﺎل ﻣﻨﺼﺘﻨﺎ,ﻓﺄﻧﻨﺎ ﻧﻮﻓﺮ ﻟﻚ اﻟﻌﺪﻳﺪ ﻣﻦ اﻟﻜﻮرﺳﺎت اﻟﺨﺎﺻﺔ</p>
            </div>
            <Slider show={false} />




        </div>
    )
}

export default Blogs