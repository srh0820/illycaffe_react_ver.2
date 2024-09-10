import React from 'react'

import subreviewscss from './scss/subReview.module.scss';
import Linegray from '../styled/LineGray'
import Linethingray from '../styled/LineThinGray'

function SubReview() {
    return (
        <section id='SubReview' className={subreviewscss.SubReview}>
            <div className={`${subreviewscss.innerdiv} container-1240`}>
                <div className='d-flex justify-content-between'>
                    <p className={subreviewscss.title}> 후기 </p>
                    <ul className='d-flex justify-content-between'>
                        <li> 포토리뷰 </li>
                        <li className='ms-2'> 전체리뷰 </li>
                        <li className='ms-2'> 제품별리뷰 </li>
                    </ul>
                </div>
                <Linegray></Linegray>
                <ul className={`${subreviewscss.ul2} d-flex justify-content-end`}>
                    <li> 추천순 </li>
                    <li className='ms-2'> 최근등록순 </li>
                </ul>
                <div className=''>
                    <p>
                        이 상품의 첫번째 리뷰를 작성해보세요. <br />
                        리뷰 작성시 <span>최대 3,000 point</span>를 드립니다.
                    </p>
                </div>
                <Linethingray></Linethingray>
            </div>
        </section>
    )
}

export default SubReview
