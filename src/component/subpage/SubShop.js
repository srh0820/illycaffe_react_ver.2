import React from 'react';

import subshopscss from './scss/subShop.module.scss';
import NumberInput from './SubShop/NumberInput';

import { ReactComponent as HeartIcon } from '../../img/heartIcon.svg';

function SubShop() {
    return (
        <section className={subshopscss.subshop}>
            <div className={`${subshopscss.prddiv} container-1240 d-flex`}>
                <div className={subshopscss.prdimg}>
                    <img src="/img/subcolombia.png" alt='250g 아라비카 셀렉션 원두커피 브라질' />
                </div>
                <div className={`${subshopscss.prdtext} position-relative`}>
                    <p className={subshopscss.absp}>
                        e-SHOP  &gt; 커피제품 &gt; 원두커피 
                    </p>

                    <div className={subshopscss.redline}></div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <h3 className='mb-0'>
                            250g 아라비카 셀렉션 원두커피 [브라질]
                        </h3>
                        <HeartIcon className='mx-4'/>
                    </div>
                    <div className={`${subshopscss.pdiv1} d-flex justify-content-between`}>
                        <p className={subshopscss.p1}>
                            카라멜과 건 과일의 아로마 <br/>
                            신맛과 쓴맛의 균형, 부드러운 목넘김
                        </p>
                        <p className={subshopscss.p2}>
                            17,000 원
                        </p>
                    </div>
                    <div className={subshopscss.thinline}></div>

                    <div className={`${subshopscss.pdiv2} d-flex`}>
                        <p className={subshopscss.p3}> 배송정보 </p>
                        <p className={subshopscss.p4}>
                            일반 출고 <br/>
                            3일 이내 출고 (주말, 공휴일제외)
                        </p>
                    </div>
                    <div className={`${subshopscss.pdiv3} d-flex`}>
                        <p className={subshopscss.p3}> 배송비 </p>
                        <p className={subshopscss.p4}> 
                            3,500원 / 주문시결제(선결제) <br/>
                            조건별배송 / 지역추가배송비
                        </p>
                    </div>
                    <div className={`${subshopscss.pdiv4} d-flex`}>
                        <p className={subshopscss.p3}> 안내 사항 </p>
                        <p className={subshopscss.p4}>
                            일리 전용 머신만 호환 가능한 점 구매에 참고 부탁드립니다. <br/>
                            질소 포장 특성상 운송 과정에서의 흔들림, 압력, 온도차에 따라 뚜껑이 부풀어 <br/>
                            오를 수 있습니다. 은박 실링이 개봉되지 않았다면 정상 제품입니다.
                        </p>
                    </div>
   
                    <NumberInput></NumberInput>

                    <div className={`${subshopscss.pdiv5} d-flex justify-content-between`}>
                        <p className={subshopscss.p5}> 장바구니 </p>
                        <p className={subshopscss.p6}> 바로 구매 </p>
                    </div>
                 
                </div>
            </div>
        </section>
    );
}

export default SubShop;
