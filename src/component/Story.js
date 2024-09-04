import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import storyscss from './scss/story.module.scss';
import Button from './styled/Button';
import storydata from '../json/story.json'; 

import coffeeIcon from '../img/coffeeIcon.svg';
import earthIcon from '../img/earthIcon.svg';
import beenIcon from '../img/beenIcon.svg';
import cafeIcon from '../img/cafeIcon.svg';

const iconMapping = {
    'coffeeIcon.svg': coffeeIcon,
    'earthIcon.svg': earthIcon,
    'beenIcon.svg': beenIcon,
    'cafeIcon.svg': cafeIcon
};

function Story() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 601);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 601);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={storyscss.story}>
            <div className={`${storyscss.inner} container-1824 d-flex`}>
                <div className={storyscss.textArea}>
                    <h2>지속 가능성 이야기</h2>
                    <p className="mb-0">
                        <span className={storyscss.default_text}>
                            콩에서 컵까지, 우리는 지구에 긍정적인 영향을 미치겠다는 목표를 함께 키워갑니다. <br />
                            품질과 지속 가능성은 함께 이루어져야 하는 지속적인 개선의 길입니다.
                        </span>
                        <span className={storyscss.short_text}>
                            콩에서 컵까지, 우리는 지구에 긍정적인 영향을 <br />
                            미치겠다는 목표를 함께 키워갑니다.
                        </span>
                    </p>
                    <Button as={Link} to="/Subpage" className={`${storyscss.btn} mb-5`}>
                        자세히보기
                    </Button>
                </div>

                <div className={`${storyscss.valueAll} d-flex`}>
                    {isMobile ? (
                        <Swiper 
                            modules={[Autoplay]}
                            spaceBetween={10} 
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                        >   
                            {storydata.sections.map((section, index) => (
                                <SwiperSlide key={index}>
                                    <div className={storyscss[section.title.toLowerCase()]}>
                                        <div className={storyscss.icon_wrapper}>
                                            <img 
                                                src={iconMapping[section.icon]} 
                                                alt={`${section.title} 아이콘`} 
                                            />
                                        </div>
                                        <h3 className='mb-0'>{section.title}</h3>
                                        <p className='mb-0'>
                                            {section.text.split('|').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {index > 0 && <br />}
                                                    {line}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className={storyscss.alldiv}>
                            {storydata.sections.map((section, index) => (
                                <div key={index} className={storyscss[section.title.toLowerCase()]}>
                                    <div className={storyscss.icon_wrapper}>
                                        <img 
                                            src={iconMapping[section.icon]} 
                                            alt={`${section.title} 아이콘`} 
                                        />
                                    </div>
                                    <h3 className='mb-0'>{section.title}</h3>
                                    <p className='mb-0'>
                                        {section.text.split('|').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {index > 0 && <br />}
                                                {line}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Story;
