import React from 'react';
import { Link } from 'react-router-dom';

import storelocatorscss from './scss/storeLocator.module.scss'

function  StoreLocatorPage() {
    return (
        <section className={storelocatorscss.storeLocator}>
            <div className={storelocatorscss.infodiv}>
                <h2>illy Caffè</h2>
                <p> 프리미엄 커피 브랜드 <br />
                    일리 카페를 가까운 매장에서 만나보세요.</p>
                <ul>
                    <li>
                        <Link to="/">고객의 소리</Link>
                    </li>
                    <li>
                        <Link to="/">지속 가능성</Link>
                    </li>
                    <li>
                        <Link to="/">제휴 · 제안</Link>
                    </li>
                </ul>
            </div>

        </section>
    );
};

export default StoreLocatorPage;
