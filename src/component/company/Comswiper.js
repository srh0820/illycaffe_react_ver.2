import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../scss/company.scss';
import comscss from '../scss/company.module.scss';
import companyData from '../../json/company.json';

function Comswiper() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 769);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <>
        {!isMobile ? (
          <Swiper
            className={'comswiper'}
            slidesPerView={'auto'}
            spaceBetween={22}
            loop={true}
          >
            {companyData.map((slide, index) => (
              <SwiperSlide 
                className={'slide'}
                key={index} 
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={'dark_overlay'}></div>
                <div className={'textarea'}>
                  <h3 className="ms-4 mt-4 mb-0">{slide.title}</h3>
                  <p className="ms-4 mb-0">
                    {slide.description.split('|').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < slide.description.split('|').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                  <i className={'arrow'}>
                    <svg className={'white'} width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#ffffff"/>
                    </svg>
                    <svg className={'red'} width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#D9261C"/>
                    </svg>                               
                  </i>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={comscss.mobile}>
            {companyData.map((slide, index) => (
              <div 
                className={comscss.imgdiv}
                key={index} 
                style={{ 
                    backgroundImage: `url(${slide.image})`, }}
                >
                <div className={'dark_overlay'}></div>
                <div className={'textarea'}>
                  <h3 className="ms-4 mt-4 mb-0">{slide.title}</h3>
                  <p className="ms-4 mb-0">
                    {slide.description.split('|').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < slide.description.split('|').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                  <i className={'arrow'}>
                    <svg className={'white'} width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#ffffff"/>
                    </svg>
                    <svg className={'red'} width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="#D9261C"/>
                    </svg>                               
                  </i>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

export default Comswiper
