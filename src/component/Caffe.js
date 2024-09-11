import React, { useState } from 'react';

import caffescss from './scss/caffe.module.scss';
import caffedata from '../json/caffe.json';

const Caffe = () => {
  const [activeTab, setActiveTab] = useState('drinks');

  const renderProducts = () => {
    return caffedata[activeTab].map((product, index) => (
        <div key={index}>
            <div className={caffescss.imageWrapper}>
                <img src={product.image} alt={product.title} className={caffescss.productImage} />
            </div>
            <h4 className='mt-3 mb-2'>{product.title}</h4>
            <p className='mb-0'>{product.description}</p>
        </div>
    ));
  };

  return (
    <section className={caffescss.caffe}>
        <div className={`${caffescss.innerdiv} container-1400`}>
            <h3 className='mb-2'>ILLY CAFFÉ</h3>
            <p>
                일리카페(illy Caffè)에서는 완벽한 맛을 자랑하는 일리 에스프레소 커피와 음식, <br />
                전통적인 카페 문화에 대한 종합적인 경험을 만날 수 있습니다.
            </p>
            <div className={caffescss.tabs}>
            <button 
                onClick={() => setActiveTab('drinks')} 
                className={`${activeTab === 'drinks' ? caffescss.active : ''}`}>
                Drinks
            </button>
            <button 
                onClick={() => setActiveTab('foods')} 
                className={`${activeTab === 'foods' ? caffescss.active : ''}`}>
                Food
            </button>
            </div>
            <div className={caffescss.product}>
                {renderProducts()}
            </div>
        </div>
    </section>
  );
};

export default Caffe;
