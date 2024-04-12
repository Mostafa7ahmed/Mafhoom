import React from 'react'
import "./aboutPage.css"
import { Link } from 'react-router-dom';
function Banner(props) {
    return (
        <div className={`bannerAll ${props.classbanner}`}>
            <div className="infoBanner">
                <h2 className="title">
                    {props.Titele}
                </h2>
                <p>
                    {props.dec}

                </p>

                {!props.showbtn ?
                    <Link to="/Contactus" variant="outlined" className='btn'>
                        تواصل معانا
                    </Link>
                    : ""}

            </div>

        </div>
    )
}

export default Banner