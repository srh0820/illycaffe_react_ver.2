import React from 'react'

import pdscss from './scss/product.module.scss';
import products from '../json/Product.json'; 

function Product() {
    return (
        <section className={pdscss.product}>
            <ul className={`${pdscss.productUl} d-flex justify-content-center mb-0`}>
                {products.map((product, index) => (
                    <li className={pdscss.productBox} key={index}>
                        <div className={`${pdscss.hoverBox} d-flex`}>
                            <div className={pdscss.textarea}>
                                <p className={pdscss.titletext}>{product.title}</p>
                                <p className={pdscss.subtext}>
                                    {product.description.split('|')[0]}<br />{product.description.split('|')[1]}
                                </p>
                            </div>
                            <div className={pdscss.imgarea}>
                                <div className={pdscss.prdImg}>
                                    <img src={product.image} alt={product.alt} />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>           
        </section>
    );
};

export default Product
