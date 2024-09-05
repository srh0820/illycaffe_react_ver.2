import React, { useState } from 'react';

import btnscss from '../scss/subShop.module.scss'; 

import { ReactComponent as DashIcon } from '../../../img/dashIcon.svg';
import { ReactComponent as PlusIcon } from '../../../img/plusIcon.svg';

const NumberInput = ({ initialValue = 1, step = 17000 }) => {
    const [value, setValue] = useState(initialValue * step); // 금액으로 초기화

    const handleIncrease = () => {
        setValue(prevValue => prevValue + step);
    };

    const handleDecrease = () => {
        setValue(prevValue => Math.max(prevValue - step, step)); // 금액이 0 이하로 내려가지 않게 설정
    };

    // 금액에 따른 수량 계산
    const quantity = value / step;

    return (
        <div className={btnscss.numberInput}>
            <div className='d-flex align-items-center justift-content-between'>
                <button onClick={handleDecrease} className={btnscss.numberInput__button}> 
                    <DashIcon></DashIcon> 
                </button>
                <span className={btnscss.numberInput__value}>
                    {quantity}
                </span>
                <button onClick={handleIncrease} className={btnscss.numberInput__button}> 
                    <PlusIcon></PlusIcon> 
                </button>
            </div>

            <p className='mx-3'> 총 상품금액 </p>
            <span className={btnscss.numberInput__total}>
                {value.toLocaleString()} 원
            </span>
        </div>
    );
};

export default NumberInput;
