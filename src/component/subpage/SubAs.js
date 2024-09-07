import React from 'react'

import subas from './scss/subAs.module.scss';
import Linegray from '../styled/LineGray'

function SubAs() {
    return (
        <section id='SubAs' className={subas.subas}>
            <div className='container-1240'>
                <p className={subas.title}> 교환 및 반품 안내 </p>
                <Linegray></Linegray>
                <ul>
                    <li> 상품 수령일로부터 7일 이내 반품 / 환불 가능합니다. </li>
                    <li> 변심 반품의 경우 왕복배송비를 차감한 금액이 환불되며, 제품 및 포장 상태가 재판매 가능하여야 합니다. </li>
                    <li> 동일상품 또는 동일상품 내 추가금액이 없는 옵션만 교환가능합니다. </li>
                    <li> 상품 불량인 경우는 배송비를 포함한 전액이 환불됩니다. </li>
                    <li> 출고 이후 환불요청 시 상품 회수 후 처리됩니다. </li>
                    <li> 구매자가 미성년자인 경우에는 상품 구입 시 법정대리인이 동의하지 아니하면 미성년자 본인 또는 법정대리인이 구매취소 할 수 있습니다. </li>
                    <li> 상품의 색상과 이미지는 기기의 해상도에 따라 다르게 보일 수 있습니다. </li>
                </ul>
            </div>

        </section>
    )
}

export default SubAs;
