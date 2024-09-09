import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import subprdscss from './scss/subPrd.module.scss';
import subprddata from './json/Subprd.json'

function SubPrd() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // 화면 크기 변경 감지
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 610);
        };

        handleResize(); // 초기 상태 확인
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={subprdscss.subprd}>
            <div className={`${subprdscss.prddiv} container-1240`}>
                <p className={subprdscss.p}> 관련 상품 </p>

                {isMobile ? (
                    // 610px 이하에서 슬라이드로 표시
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2}
                        // breakpoints={{
                        //     480: {
                        //         slidesPerView: 1, 
                        //     }
                        // }}
                        modules={[Autoplay]}
                        loop={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                    >
                        {subprddata.map((coffee, index) => (
                            <SwiperSlide key={index}>
                                <li className={subprdscss.coffee_item}>
                                    <img src={coffee.image} alt={coffee.alt} />
                                    <p className={`${subprdscss.coffeetitle} mb-0`}>{coffee.title}</p>
                                    <p className='mb-0'>{coffee.origin}</p>
                                </li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    // 기본 상태 (슬라이드가 아닌 상태)
                    <ul className={subprdscss.prdlist}>
                        {subprddata.map((coffee, index) => (
                            <li key={index} className={subprdscss.coffee_item}>
                                <img src={coffee.image} alt={coffee.alt} />
                                <p className={`${subprdscss.coffeetitle} mb-0`}>{coffee.title}</p>
                                <p className='mb-0'>{coffee.origin}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default SubPrd;