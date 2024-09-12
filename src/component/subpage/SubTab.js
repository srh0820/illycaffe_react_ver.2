import React, { useState } from 'react';

import subtabscss from './scss/subTab.module.scss';

const SubTab = () => {
    const [activeTab, setActiveTab] = useState('details');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        
        // 선택된 섹션 찾기
        const section = document.getElementById(tab);
        
        // 헤더 높이 구하기
        const header = document.querySelector('header'); 
        const headerHeight = header ? header.offsetHeight : 0; 

        if (section) {
            // 섹션 위치에서 헤더 높이를 뺀 후 스크롤 이동
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={subtabscss.subtab}>
            <div className={`${subtabscss.subdiv} container-1240`}>
                <button className={activeTab === 'SubDetails' ? 'active' : ''}
                        onClick={() => handleTabClick('SubDetails')}>
                    상세정보
                </button>
                <button className={activeTab === 'SubAs' ? 'active' : ''}
                        onClick={() => handleTabClick('SubAs')}>
                    교환 및 반품
                </button>
                <button className={activeTab === 'SubReview' ? 'active' : ''}
                        onClick={() => handleTabClick('SubReview')}>
                    후기
                </button>
                <button className={activeTab === 'SubQna' ? 'active' : ''}
                        onClick={() => handleTabClick('SubQna')}>
                    상품문의
                </button>
            </div>
        </section>
    );
};

export default SubTab;
