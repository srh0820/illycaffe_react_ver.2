import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import '../scss/shop.scss';
import shopData from '../../json/shop.json';

function Shopswiper() {
    return (
        <div className="shopswiper">
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                speed={9000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
            >
                {shopData.map((slide, index) => (
                    <SwiperSlide className='shopslide' key={index}>
                        <img src={slide.img} alt={slide.title} />
                        <p className="my-2">{slide.title}</p>
                        <p className="mb-0">{slide.price}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Shopswiper;
