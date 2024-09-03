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

    return (
        <section className={`${Quickscss.quick} ${isVisible ? Quickscss.visible : ''}`}>
            <ul>
                <li>
                    <a href="#top">
                        <Top width="45" height="45" />
                        <span className="visually-hidden">위로</span>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Quick;
