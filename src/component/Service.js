import React from 'react';

import servicescss from './scss/service.module.scss';
import arrowForwardicon from '../img/arrowForwardIcon.svg'

function Service() {
    return (
        <section className={servicescss.service}>
            <div className={`${servicescss.innerdiv} container-1400`}>
                <div className={servicescss.div1}>
                    <p className='mb-0'> 가맹점 개설 안내 </p>
                    <p className={`${servicescss.p2} mb-0`}> 성공 창업을 위한 선택 </p>
                </div>
                <div className={servicescss.div2}>
                    <p className='mb-0'> 매장 찾기 </p>
                    <p className={`${servicescss.p2} mb-0`}>
                        가까운 일리 매장을 <br />
                        확인해보세요.
                    </p>
                </div>
                <div className={servicescss.newsdiv}>
                    <div className={servicescss.news}>
                        <div className='d-flex justify-content-between'>
                            <h3 className='mb-0'> NEWS </h3>
                            <button> more <img src={arrowForwardicon} alt="더보기" /></button>
                        </div>
                        <ul>
                            <li>
                                <a href="http://www.enewstoday.co.kr/news/articleView.html?idxno=2173242" target="_blank" rel="noopener noreferrer">
                                    [이뉴스투데이] 일리카페, ‘제15회 광주비엔날레 이탈리아 파빌리온’ 참여</a>
                                <span>2024.09.07</span>
                            </li>
                            <li>                
                                <a href='https://m.news.nate.com/view/20240903n09400?mid=m02' target="_blank" rel="noopener noreferrer">
                                    [뉴스1] 일리카페, ‘프리즈 서울 2024’  3년 연속 공식 파트너 선정</a>
                                <span>2024.09.03</span>
                            </li>
                            <li>
                                <a href='https://www.metroseoul.co.kr/article/20240519500092' target="_blank" rel="noopener noreferrer">
                                    [메트로신문] 일리카페, 플래그쉽 스토어 '선릉 저스트코 타워점' 오픈 </a>
                                <span>2024.05.19</span>
                            </li>
                        </ul>
                    </div>
                    <div className={servicescss.textdiv}>
                        <p className='mb-0'> EVERT DA<span>ILLY</span> </p>
                        <p className='mb-3'> 언제 어디서든 일리를 만나보세요 </p>
                        <p className='mb-0'> 단 한 번의 구독으로 간편하게 문 앞까지 <span>무료배송</span> </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
