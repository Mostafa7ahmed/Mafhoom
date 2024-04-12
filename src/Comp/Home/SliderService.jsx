import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import CardSlideService from './CardSlideService';
import CardSlideBlogs from './CardSlideBlogs';

function Slider(props) {
    return (
        <Swiper
            style={{
                "--swiper-pagination-color": "#ff9101",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "5px",
                "--swiper-navigation-color": "#ff9101",
            }}
            cssMode={true}
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            mousewheel={true}
            keyboard={true}

            breakpoints={{
                640: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2

                },
                1024: {
                    slidesPerView: 3,

                },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}

            className="mySwiper"

        >

            {props.show ? <>
                <SwiperSlide className='parentCard'  >

                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'   >
                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'  >
                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'  >
                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'  >
                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'   >
                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'  >
                    <CardSlideService />
                </SwiperSlide>
                <SwiperSlide className='parentCard'  >
                    <CardSlideService />
                </SwiperSlide>
            </> :
                <>
                    <SwiperSlide className='parentCard'  >
                        <CardSlideBlogs />
                    </SwiperSlide>
                    <SwiperSlide className='parentCard'  >
                        <CardSlideBlogs />
                    </SwiperSlide>
                    <SwiperSlide className='parentCard'  >
                        <CardSlideBlogs />
                    </SwiperSlide>
                    <SwiperSlide className='parentCard'  >
                        <CardSlideBlogs />
                    </SwiperSlide>
                    <SwiperSlide className='parentCard'  >
                        <CardSlideBlogs />
                    </SwiperSlide>
                    <SwiperSlide className='parentCard'  >
                        <CardSlideBlogs />
                    </SwiperSlide>

                </>
            }





        </Swiper>
    )
}

export default Slider