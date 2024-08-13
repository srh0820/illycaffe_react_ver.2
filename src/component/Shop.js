import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import './scss/shop.scss';
import shopscss from './scss/shop.module.scss';
import shopData from '../json/shop.json';

function Shop() {
    return (
        <section className={shopscss.shop}>
            <div className={shopscss.shopdiv}>
                <div className={shopscss.shoptext}>
                    <h2>Meet The Machines & Coffee</h2>
                    <p className="mb-4">
                        일리 커피는 완벽한 커피 한 잔의 즐거움을 중심으로 정보, 경험, 맛과 과학 및 예술의 세계를 구축했습니다.
                        <br />
                        커피 머신과 디자이너 컵 그리고 액세서리들이 준비되어 있습니다.
                    </p>
                    <a href="/" className={shopscss.btn}>자세히보기</a>
                </div>
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
                        loopedSlides={shopData.length}
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
            </div>
        </section>
    );
};

export default Shop;
