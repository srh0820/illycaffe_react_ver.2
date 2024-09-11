import React from 'react';

import eventscss from './scss/event.module.scss';

import ScheduleIcon from '../img/schedule.svg'
import CalendarIcon from '../img/calendar_month.svg'
import MapIcon from '../img/map.svg'

function Event() {
    return (
        <section className={eventscss.event}>
            <div className={`${eventscss.innerdiv} container-1400`}>
                <div className={eventscss.videodiv}>
                    <video autoPlay loop muted playsInline className={eventscss.video} style={{ width: '700px' }}>
                        <source src="/img/event.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={eventscss.textdiv}>
                    <p className={eventscss.p1}> 일리 X 난지캠핑장 </p>
                    <h4> 도심 속 휴식공간, 일리카페와 함께하세요 </h4>
                    <p className={eventscss.p2}>
                        더욱더 넓어진 난지캠핑장에서 <br />
                        커피 한 잔의 행복을 제공해드립니다. <br />
                        일리카페로 놀러오세요.
                    </p>
                    <p className={eventscss.p3}> 아메리카노 마시고 럭키드로우 행운까지! </p>
                    <ul>
                        <li>
                            <img src={MapIcon} alt="장소" className={eventscss.icon}></img> 
                            한강 난지캠핑장
                        </li>
                        <li>
                            <img src={CalendarIcon} alt="날짜" className={eventscss.icon}></img> 
                            2024.09.04(수) ~ 2024.10.02(수)
                        </li>
                        <li>
                           <img src={ScheduleIcon} alt="시각" className={eventscss.icon}></img> 
                            11시~20시
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Event;
