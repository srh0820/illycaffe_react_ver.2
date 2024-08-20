import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Pagination } from 'swiper/modules';

import './scss/product.scss';
import pdscss from './scss/product.module.scss';
import products from '../json/productdata.json'; 

function Product() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1290);
    const [isSlide, setIsSlide] = useState(window.innerWidth < 769);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1290);
            setIsSlide(window.innerWidth < 769);
        };

        handleResize(); // 초기 렌더링 시 호출
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={pdscss.product}>
            {isSlide ? (
                <Swiper 
                    className={'productswiper'}
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1} 
                    pagination={{ clickable: true }} 
                    loop={true} 
                    autoplay={{ 
                        delay: 4000,  
                        disableOnInteraction: false,
                    }}
                  
                >
                    {products.map((product, index) => (
                        <SwiperSlide 
                            key={index}
                            className={'slide'}>
                            <div className={'productBox'}>
                                <div className={`${'hoverBox'} d-flex`}>
                                    <div className={'textarea'}>
                                        <p className={'titletext'}>{product.title}</p>
                                        <p className={'subtext'}>
                                            {product.description.split('|')[0]}<br />
                                            {product.description.split('|')[1]}
                                        </p>
                                    </div>
                                    <div className={'imgarea'}>
                                        <div className={'prdImg'}>
                                            <img src={product.image} alt={product.alt} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <ul className={`${pdscss.productUl} d-flex justify-content-center mb-0`}>
                    {products.map((product, index) => (
                        <li className={pdscss.productBox} key={index}>
                            <div className={`${pdscss.hoverBox} d-flex`}>
                                <div className={pdscss.textarea}>
                                    <p className={pdscss.titletext}>{product.title}</p>
                                    <p className={pdscss.subtext}>
                                        {isLargeScreen ? (
                                            <>
                                                {product.description.split('|')[0]}<br />
                                                {product.description.split('|')[1]}
                                            </>
                                        ) : (
                                            <>
                                                {product.description2.split('|')[0]}<br />
                                                {product.description2.split('|')[1]}
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className={pdscss.imgarea}>
                                    <div className={pdscss.prdImg}>
                                        <img src={product.image} alt={product.alt} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Product;