import React from 'react';

import subshopscss from './shop.module.scss';
import products from '../../json/productdata.json';

function SubShop() {
    const firstProduct = products[0]; // 첫 번째 제품만

    return (
        <section className={subshopscss.subshop}>
            <div className={`${subshopscss.prddiv} container-1400 d-flex`}>
                {firstProduct && ( // 첫 번째 제품이 존재하는지 확인
                    <div className={subshopscss.prdimg}>
                        <img src={firstProduct.image} alt={firstProduct.alt} />
                    </div>
                )}

                <div className={subshopscss.prdtext}>
                    <h3 className='mb-4'>
                        250g 아라비카 셀렉션 원두커피 [브라질]
                    </h3>
                    <div className={`${subshopscss.pdiv1} d-flex`}>
                        <p className={subshopscss.p1}>
                            카라멜과 건 과일의 아로마 <br/>
                            신맛과 쓴맛의 균형, 부드러운 목넘김
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SubShop;
