import React, { useState } from 'react'

function Menu() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(prevState => !prevState);
    };
    return (

        <div className='container'>
            <input type="checkbox" id="checkbox1" className="checkbox1 visuallyHidden" onClick={handleCheckboxChange} />
            <label htmlFor="checkbox1">
                <div className={`hamburger &&  ${isChecked ? "hamburger1" : "hamburger"} `}>
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>

    )
}

export default Menu