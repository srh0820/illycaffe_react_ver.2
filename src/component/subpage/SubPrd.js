import React from 'react'

import subprdscss from './scss/subPrd.module.scss';
import subprddata from './json/Subprd.json'

function SubPrd() {
    return (
        <section className={subprdscss.subprd}>
            <div className='container-1240'>
                <p className={subprdscss.p}> 관련 상품 </p>
                <ul className={subprdscss.prdlist}>
                    {subprddata.map((coffee, index) => (
                    <li key={index} className={subprdscss.coffee_item}>
                        <img src={coffee.image} alt={coffee.alt} />
                        <p className='mb-0'>{coffee.title}</p>
                        <p className='mb-0'>[{coffee.origin}]</p>
                    </li>
                ))}
          </ul>
            </div>
        </section>
    )
}

export default SubPrd;