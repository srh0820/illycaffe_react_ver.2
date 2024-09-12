import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import mainscss from './scss/main.module.scss';

function Main() {
    return (
        <section className={mainscss.main}>
            <div className="container-1824">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}       
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 6000, 
                        disableOnInteraction: false
                    }}
                    className={mainscss.swiperContainer}
                >
                    <SwiperSlide style={{ backgroundColor: '#FFF0EF' }} className={mainscss.slide1}>
                        <div className={mainscss.text}>
                            <ul className='d-flex'>
                                <li><img src="/img/mainlogo.png" alt="일리 로고" /></li>
                                <li><img src="/img/mainx.png" alt="엑스 이미지" /></li>
                                <li><img src="/img/mainkakao.png" alt="카카오 로고" /></li>
                            </ul>
                            <h4>마음을 담아 행복을 나누는</h4>
                            <h3>추석 선물 대전</h3>
                            <p>[Y3.3 캡슐커피커신 디스펜서 세트]</p>
                            <p>Y3.3 캡슐커피커신(색상 선택) + 18P 캡슐커피 1팩(클라시코) + 일리 캡슐 디스펜서</p>
                            <p>* 머신에 웰컴캡슐 14p가 포함되어 있습니다.</p>
                            <p>정가 <span>159,000</span></p>
                            <p>카카오톡 선물하기에서 구매 시 99,000원</p>
                            <button>
                                <a>
                                    <img src='/img/mainkakao2.png' alt='카카오톡 선물하기'></img>
                                    카카오톡 선물하기
                                </a>
                            </button>
                        </div>
                        <img src="/img/main1.png" alt="슬라이드 1" />
                    </SwiperSlide>

                    <SwiperSlide style={{ backgroundColor: '#DFF4CF' }} className={mainscss.slide2}>
                        <div className={mainscss.text}>
                            <h4>일리카페 신규 오픈</h4>
                            <h3>선릉 저스트코타워점</h3>
                            <p>OPENING EVENT</p>
                            <p>illy Goody Bag Set</p>
                            <p>* 올림피아 패턴 에코백 + 트래블 머그 + 에스프레소 호환 캡슐</p>
                            <div className='d-flex'>
                                <p>정가 63,500 </p>
                                <p>24,900원 </p>
                            </div>
                            <p>서울특별시 강남구 테헤란로 431 1층, 일리카페</p>
                            <p>02.567.1282</p>
                        </div>
                        <img src="/img/maingif.gif" alt="슬라이드 2" style={{ borderRadius: '20px' }}/>
                    </SwiperSlide>

                    <SwiperSlide style={{ backgroundColor: '#EADACD' }} className={mainscss.slide3}>
                        <div className={mainscss.text}>
                            <h4>일리 브랜드 전시회</h4>
                            <h3>LIVE HAPP<span>ILLY</span> IN SEOUL</h3>
                            <ul>
                                <li><span>기간</span> 2024.09.03(화) ~ 09.24(화)</li>
                                <li><span>시간</span> 11시 ~ 20시</li>
                                <li><span>장소</span> 강남구 모나코 스페이스</li>
                                <li><span>티켓</span> 일리 전시회 무료 / 홈카페 클래스 2만원 </li>
                                <li><span>문의</span> 1666-1282</li>
                            </ul>
                            <p>* 홈카페 클래스는 네이버 예약</p>
                            <p>누구나, 언제든지 들어오셔서 자유로운 관람이 가능합니다.</p>
                        </div>
                        <img src="/img/main3.png" alt="슬라이드 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Main;
