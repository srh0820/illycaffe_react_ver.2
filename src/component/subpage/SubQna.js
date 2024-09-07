import React from 'react'

import subqnascss from './scss/subQna.module.scss';
import Linegray from '../styled/LineGray'
import Linethingray from '../styled/LineThinGray'

function SubQna() {
    return (
        <section id='SubQna' className={subqnascss.SubQna}>
            <div className='container-1240'>
                <p className={subqnascss.title}> 상품문의 </p>
                <div className={`${subqnascss.btndiv} d-flex justify-content-between`}>
                    <p>
                        상품에 대한 문의를 남기는 공간입니다. <br />
                        해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                    </p>
                    <button> 문의하기 </button>
                </div>
                <Linegray></Linegray>
                <table className={subqnascss.table}>
                    <thead>
                        <tr>
                            <th className={subqnascss.textth}></th>
                            <th className={subqnascss.textth}>제목</th>
                            <th className={subqnascss.textth}>작성자</th>
                            <th className={subqnascss.textth}>작성일</th>
                            <th className={subqnascss.textth}>답변상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={subqnascss.textred}>공지</td>
                            <td>프로모션 상품 운영</td>
                            <td>관리자</td>
                            <td>2021.11.03</td>
                            <td>답변완료</td>
                        </tr>
                        <tr>
                            <td className={subqnascss.textred}>공지</td>
                            <td>커피 캡슐 안내 (문의 전 확인 부탁드립니다.)</td>
                            <td>관리자</td>
                            <td>2020.04.07</td>
                            <td>답변완료</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>유통기한 문의</td>
                            <td>le****</td>
                            <td>2022.10.20</td>
                            <td>답변완료</td>
                        </tr>
                    </tbody>
                </table>
                <Linethingray></Linethingray>
            </div>
        </section>
    )
}

export default SubQna
