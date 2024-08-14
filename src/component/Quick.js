import React from 'react';

import Quickscss from './scss/quick.module.scss';

import { ReactComponent as Top } from '../img/quicktop.svg';

const Quick = () => (
    <section className={Quickscss.quick}>
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

export default Quick;
