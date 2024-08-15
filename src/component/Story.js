import React from 'react';
import { Link } from 'react-router-dom';

import storyscss from './scss/story.module.scss';
import Button from './styled/btn';

import coffeeIcon from '../img/coffeeIcon.svg';
import earthIcon from '../img/earthIcon.svg';
import beenIcon from '../img/beenIcon.svg';
import cafeIcon from '../img/cafeIcon.svg';

function Story() {  
    return (
        <section className={storyscss.story}>
            <div className={`${storyscss.inner} container-1824 d-flex`}>
                <div className={`${storyscss.textArea} col-6`}>
                    <h2>지속 가능성 이야기</h2>
                    <p>
                        콩에서 컵까지, 우리는 지구에 긍정적인 영향을 미치겠다는 목표를 함께 키워갑니다. <br />
                        품질과 지속 가능성은 함께 이루어져야 하는 지속적인 개선의 길입니다.
                    </p>
                    <Button as={Link} to="/" className={storyscss.btn}>
                        자세히보기
                    </Button>
                </div>

                <div className={`${storyscss.valueAll} col-6 d-flex`}>
                    <div> 
                        <div className={`${storyscss.mission} pb-4`}>
                            <div className={storyscss.icon_wrapper}>
                                <img src={coffeeIcon} alt="커피 아이콘" />
                            </div>
                            <h3>Mission</h3>
                            <p>
                                우리는 감각과 정신으로 즐길 수 있는 <br />
                                완벽한 한 잔의 커피를 위한 개발에 <br />
                                헌신하고 있습니다.
                            </p>
                        </div>
                        <div className={storyscss.values}>
                            <div className={storyscss.icon_wrapper}>
                                <img src={beenIcon} alt="커피 원두 아이콘" />
                            </div>
                            <h3>Values</h3>
                            <p>
                                우리는 커피 원두에서 컵으로 이어지는 <br />
                                가치기준의 모든 접점에 <br />
                                영감을 불어 넣는 것을 목표로 합니다
                            </p>
                        </div>
                    </div> 
                    <div>
                        <div className={`${storyscss.Vision} pb-5`}>
                            <div className={storyscss.icon_wrapper}>
                                <img src={earthIcon} alt="지구 아이콘" />
                            </div>
                            <h3>Vision</h3>
                            <p>
                                우리의 꿈은 특별한 커피 문화를 <br />
                                전 세계 시장에 보급하는 것입니다.
                            </p>
                        </div>
                        <div className={storyscss.Strategy}>
                            <div className={storyscss.icon_wrapper}>
                                <img src={cafeIcon} alt="카페 아이콘" />
                            </div>
                            <h3>Strategy</h3>
                            <p>
                                우리는 일리카페가 습득한 기술을 바탕으로 <br />
                                University of Coffee 센터를 설립하여 <br />
                                고품질 커피 문화를 교육하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Story;
