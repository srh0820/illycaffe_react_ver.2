import React from 'react'

import subqnascss from './scss/subQna.module.scss';
import Linegray from '../styled/LineGray'

function SubQna() {
    return (
        <section className={subqnascss.SubQna}>
            <div className='container-1240'>
                <p className={subqnascss.title}> 상품문의 </p>
                <div className='d-flex'>
                    <p>
                        상품에 대한 문의를 남기는 공간입니다. <br />
                        해당 게시판의 성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                    </p>
                    <button> 문의하기 </button>
                </div>
                <Linegray></Linegray>
            </div>
        </section>
    )
}

export default SubQna
