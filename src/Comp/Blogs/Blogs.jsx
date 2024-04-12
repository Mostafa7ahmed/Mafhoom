import React from 'react'
import Banner from '../About/Banner'
import Slider from '../Home/SliderService'
import "./blogs.css"
function Blogs() {
    return (
        <>
            <Banner Titele="اهم النصائح والمقالات " dec="نقدم لطلابنا الاعزاء افضل واهم النصائح من كافة المعلمين" classbanner="bannerBlogs" />

            <div className="BlogsSlider">
                <Slider show={false} />
            </div>
        </>
    )
}

export default Blogs