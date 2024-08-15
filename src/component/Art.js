import React, { useState } from 'react';
import YouTube from 'react-youtube';
import artscss from './scss/art.module.scss';

const Art = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayButtonClick = () => {
        setShowVideo(true);
    };

    const handleVideoEnd = () => {
        setShowVideo(false); // 동영상이 끝나면 썸네일 이미지로 돌아감
    };

    const opts = {
        height: '530',
        width: '1400',
        playerVars: {
            autoplay: 1, 
        },
    };

    return (
        <section className={artscss.art}>
            <div className={artscss.box}>
                <div className={`${artscss.videoArea} d-flex justify-content-center`}>
                    {!showVideo ? (
                        <div className={artscss.thumbnail} onClick={handlePlayButtonClick}>
                            <img src="/img/artcolletion.jpg" alt="Custom Thumbnail" />
                            <button className={artscss.playButton} aria-label="Play Video"></button>
                        </div>
                    ) : (
                        <YouTube videoId="k9X1wxnneMs" opts={opts} onEnd={handleVideoEnd} />
                    )}
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
