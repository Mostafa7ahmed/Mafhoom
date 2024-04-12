import React from 'react'
import Banner from './About/Banner'

function Error() {
    return (
        <div className='error'>
            <Banner Titele="حدث خطاء" classbanner="error" showbtn={true} />
        </div>
    )
}

export default Error