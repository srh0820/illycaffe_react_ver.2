import React from 'react';
import { Link } from 'react-router-dom';

import ftscss from './scss/ft.module.scss';

import facebookIcon from '../img/facebookIcon.svg';
import instagramIcon from '../img/instagramIcon.svg';
import kakaotalkIcon from '../img/kakaotalkIcon.svg';

function Ft() {
    return (  // return 문을 추가
        <footer className={ftscss.ft}>
            <div className={`${ftscss.ftdiv} container-1400`}>
                <h1 className="ms-0 mb-0 py-5">
                    <Link to="/">
                        <img src="/img/ftLogo.png" alt="로고" />
                    </Link>
                </h1>
                <ul className={`${ftscss.gnb} d-flex ms-0 mb-0 ps-0 pt-3 pb-5 border-bottom`}>
                    <li className="me-4"><Link to="/">BRAND</Link></li>
                    <li className="me-4"><Link to="/">ILLY CAFFE</Link></li>
                    <li className="me-4"><Link to="/">ILLY SHOP</Link></li>
                    <li className="me-4"><Link to="/">UDC</Link></li>
                    <li className="me-4"><Link to="/">BTB</Link></li> 
                    <li className="me-4"><Link to="/">e-SHOP</Link></li>
                </ul>
                <div className={`${ftscss.ftText} py-5 mb-0`}>
                    <p>(주)큐로홀딩스<br />
                        대표자 | 조중기    사업자등록번호 | 129-81-19361    주소 | 서울특별시 강남구 테헤란로13길 31-1 (일리빌딩)<br />
                        대표번호 │ 1666-1282    AS접수 및 문의 │ 1:1 게시판<br />
                        마케팅제휴 │ illycaffe@illycaffe.co.kr</p>
                    <div className={`${ftscss.ftTextIcon} d-flex justify-content-between align-items-end`}>
                        <p className="mb-0">Copyright(c) 2021 www.illycaffe.co.kr All rights reserved.<br />
                            © 2021 illycaffè S.p.A. | P.IVA 00055180327 | Via Flavia 110, 34147 Trieste - Italy</p>
                        <ul className={`${ftscss.ftIcon} d-flex justify-content-end mb-0`}>
                            <li className="ms-2 mb-0">
                                <a href="https://www.facebook.com/illykorea.official" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="일리 페이스북" />
                                </a>
                            </li>
                            <li className="ms-2 mb-0">
                                <a href="http://www.instagram.com/illyinkorea" target="_blank" rel="noopener noreferrer">
                                    <img src={instagramIcon} alt="일리 인스타그램" />
                                </a>
                            </li>
                            <li className="ms-2 mb-0">
                                <a href="https://pf.kakao.com/_rrRxij" target="_blank" rel="noopener noreferrer">
                                    <img src={kakaotalkIcon} alt="일리 카카오톡" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Ft;
