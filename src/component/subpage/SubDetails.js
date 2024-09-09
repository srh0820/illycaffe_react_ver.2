import React from 'react'

import subdetailsscss from './scss/subDetails.module.scss';
import subdetailsdata from './json/SubDetails.json';

import logo from '../../img/Logo.svg';

function SubDetails() {
    return (
        <section id='SubDetails' className={subdetailsscss.subdetails}>
            <div className={`${subdetailsscss.subdtdiv} container-1240`}>
                <div className={`${subdetailsscss.logodiv} d-flex`}>
                    <img src='/img/detailsimg.jpg' alt='일리카페 코리아 인증마크'></img>
                    <div className={`${subdetailsscss.pdiv} d-flex`}>
                        <p className={subdetailsscss.textred}>
                            본 로고는 illycaffe S.p.A에서 한국 고객들에게 적법하고 안전한 <br />
                            관리를 통해 유통되는 제품임 을 보증하기 위하여 한국 독점 파트너사인 <br />
                            일리카페 코리아(주식회사 큐로홀딩스)에게만 제공한 인증 마크입니다. 
                        </p>
                        <p className={subdetailsscss.textredshort}>
                            본 로고는 illycaffe S.p.A에서 한국 독점 파트너사인 <br />
                            일리카페 코리아(큐로홀딩스)에만 제공한 인증 마크입니다.
                        </p>
                        <p className={subdetailsscss.textredshort2}>
                            본 로고는 illycaffe S.p.A에서 <br /> 
                            한국 독점 파트너사인 <br />
                            일리카페 코리아(큐로홀딩스)에만 <br /> 
                            제공한 인증 마크입니다.
                        </p>
                        <p className={subdetailsscss.textblack}>
                            큐로홀딩스를 통하지 아니하고  병행수입 또는 인터넷 직구 등의 방법을 통하여 <br />
                            유통되는 일리 제품들의 경우, 재활용제품, 유통기한 변조, 내용물 변경 또는 <br />
                            기계 안전 등으로 인하여 문제가 발생했을 시 제조사인 illycaffe S.p.A와 <br />
                            일리카페 코리아(주식회사 큐로홀딩스)를 통해 A/S, 배상 등의 <br />
                            어떠한 보호를 받을 수 없습니다.                        
                        </p>
                        <p className={subdetailsscss.textblackshort}>
                            큐로홀딩스를 통하지 않은 병행수입 또는 직구 제품은 <br /> 
                            문제 발생 시 제조사 및 일리카페 코리아로부터 <br />
                            A/S나 배상을 받을 수 없습니다.            
                        </p>
                        <p className={subdetailsscss.textblackshort2}>
                            큐로홀딩스를 통하지 않은 병행수입 <br /> 
                            또는 직구 제품은 문제 발생 시 <br />
                            제조사 및 일리카페 코리아로부터 <br />
                            A/S나 배상을 받을 수 없습니다.            
                        </p>
                    </div>
                </div>
                <div className={subdetailsscss.exdiv}>
                    <img src={logo} alt='로고 이미지'></img>
                    <h3>이탈리아 프리미엄 커피 브랜드</h3>
                    <p className={subdetailsscss.p1}>
                        일리는 혁신, 직관과 전문성으로 탄생된 아주 특별한 커피 브랜드입니다. <br />
                        <span>완벽한 한잔의 커피를 위하여 일리는 100% 아라비카 원두만으로 블랜딩</span>하였습니다. <br />
                        일리만의 특별한 질소압축 포장방식(Pressurization) 으로 <br />
                        어디서나 동일하고 신선한 커피의 맛과 향을 느낄 수 있는 세계적인 커피입니다. 
                    </p>
                    <p className={subdetailsscss.p2}> Arabica Selection </p>
                    <p className={subdetailsscss.p3}>
                        원두 상태의 제품으로 그라인더로 분쇄하여 사용하실 수 있습니다. <br />
                        개폐하기 용이한 디자인으로 밀폐 후 외부 산소를 완벽히 차단하여 <br />
                        커피의 신선도와 향을 유지시켜 줍니다. 개인 취향에 맞게 분쇄도를 설정하여 <br />
                        추출할 수 있으며, 분쇄커피보다 산화도가 더딥니다.
                    </p>
                </div>
                <div className={subdetailsscss.coffeelist}>
                    {subdetailsdata.map((coffee) => (
                        <div key={coffee.id} className={subdetailsscss.coffeeitem}>
                            <img src={coffee.image} alt={coffee.alt} className={subdetailsscss.coffeeimg}/>
                            <div className={subdetailsscss.coffeeinfo}>
                                <h3>{coffee.title}</h3>
                                {coffee.description.split('|').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubDetails
