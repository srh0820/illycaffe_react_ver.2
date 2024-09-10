import React, { useEffect, useState } from 'react';

import Quickscss from './scss/quick.module.scss';

import { ReactComponent as Top } from '../img/quicktop.svg';

const Quick = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <section className={`${Quickscss.quick} ${isVisible ? Quickscss.visible : ''}`}>
            <ul>
                <li>
                    <button onClick={scrollToTop} aria-label="위로 가기">
                        <Top width="45" height="45" />
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Quick;
