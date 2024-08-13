import React from 'react';

import artscss from './scss/art.module.scss';

const Art = () => {
    return (
        <section className={artscss.art}>
            <div className={artscss.box}>
                <div className={`${artscss.videoArea} d-flex justify-content-center`}>
                    <img src="/img/artColletion.jpg" alt="Illy Art Collection Video" />
                    <button className={artscss.playButton} aria-label="Play Video"></button>
                </div>
                <div className={artscss.textArea}>
                    <h2 className="mb-3">ILLY ART COLLECTION</h2>
                    <p className={`${artscss.p1} mb-3`}>JUDY CHICAGO - 4 ESPRESSO</p>
                    <p className={artscss.p2}>
                        1960년대 미국 미술계에 등장한 가장 영향력 있는 예술가 <br />
                        주디 시카고의 70년대 작품 속 감각적인 움직임을 컵의 우아한 형태로 표현
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Art;
