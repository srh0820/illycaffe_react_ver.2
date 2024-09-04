import React from 'react';
import { Link } from 'react-router-dom';

import ftscss from './scss/ft.module.scss';

import facebookIcon from '../img/facebookIcon.svg';
import instagramIcon from '../img/instagramIcon.svg';
import kakaotalkIcon from '../img/kakaotalkIcon.svg';

function Ft() {
    return (
        <footer className={ftscss.ft}>
            <div className={`${ftscss.ftdiv} container-1400`}>
                <h1 className="ms-0 mb-0 py-5">
                    <Link to="/">
                        <img src="/img/ftLogo.png" alt="로고" />
                    </Link>
                </h1>
                <ul className={`${ftscss.gnb} d-flex ms-0 mb-0 ps-0 pt-3 pb-5 border-bottom`}>
                    <li className="me-4"><Link to="Subpage">BRAND</Link></li>
                    <li className="me-4"><Link to="Subpage">ILLY CAFFE</Link></li>
                    <li className="me-4"><Link to="Subpage">ILLY SHOP</Link></li>
                    <li className="me-4"><Link to="Subpage">UDC</Link></li>
                    <li className="me-4"><Link to="Subpage">BTB</Link></li> 
                    <li className="me-4"><Link to="Subpage">e-SHOP</Link></li>
                </ul>
                <div className={`${ftscss.ftText} py-5 mb-0`}>
                    <p className="mb-0">
                        <span className={ftscss.default_text}>
                            (주)큐로홀딩스<br />
                            대표자 | 조중기 &nbsp;&nbsp; 사업자등록번호 | 129-81-19361 &nbsp;&nbsp; 주소 | 서울특별시 강남구 테헤란로13길 31-1 (일리빌딩) <br />
                            대표번호 │ 1666-1282 &nbsp;&nbsp; AS접수 및 문의 │ 1:1 게시판 <br />
                            마케팅제휴 │ illycaffe@illycaffe.co.kr
                        </span>
                        <span className={ftscss.short_text}>
                            (주)큐로홀딩스<br />
                            대표자 | 조중기 &nbsp;&nbsp; 사업자등록번호 | 129-81-19361 <br />
                            주소 | 서울특별시 강남구 테헤란로13길 31-1 (일리빌딩) <br />
                            대표번호 │ 1666-1282 &nbsp;&nbsp; AS접수 및 문의 │ 1:1 게시판 <br />
                            마케팅제휴 │ illycaffe@illycaffe.co.kr
                        </span>
                    </p>
                    <div className={`${ftscss.ftTextIcon} d-flex justify-content-between`}>
                        <p className="mb-0">
                            Copyright(c) 2021 <span className={`${ftscss.br} d-none`}><br /></span> www.illycaffe.co.kr All rights reserved. <br />
                            © 2021 illycaffè S.p.A. <span> | P.IVA 00055180327 | Via Flavia 110, 34147 Trieste - Italy </span> 
                        </p>
                        <ul className={`${ftscss.ftIcon} d-flex align-items-center justify-content-end mb-0`}>
                            <li className="mb-0">
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
