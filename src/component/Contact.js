import React, { useState, useEffect } from 'react';

import cntFormscss from './scss/contactForm.module.scss';
import FormFields from './contact/FormFields';

function Contact() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isFormVisible, setIsFormVisible] = useState(false); 

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(prev => !prev);
    };


    return (
        <section id='contact_section' className={cntFormscss.contactForm}>
            <div className={cntFormscss.conForm}>
                <div className={`${cntFormscss.formArea} col-6`}>
                    <div className={cntFormscss.boxWrapper}>
                        <div className={cntFormscss.textbox}>
                            <h2 className="ms-1 mb-0">CONTACT US</h2>
                            <p className="ms-1 mb-0">서울 강남구 테헤란로13길 31-1 (일리빌딩)</p>
                            <div className="d-flex ms-1">
                                <p className="mb-0 me-3">02) 3460-4992</p>
                                <p className="mb-0">UDC@illycaffe.co.kr</p>
                            </div>
                        </div>
                         {/* 데스크톱 화면에서는 항상 폼이 보이게 */}
                         {(!isMobile || isFormVisible) && (
                            <div className={cntFormscss.formContent}>
                                <FormFields
                                    formData={formData}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                />
                                {isMobile && (
                                    <button className={cntFormscss.closeButton} onClick={toggleFormVisibility}>닫기</button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className={`${cntFormscss.imgArea} col-6`}>
                    {isMobile && !isFormVisible && (
                        <div className={cntFormscss.overlayText}>
                            <h2 className='mb-0'>CONTACT US</h2>
                            <button className={cntFormscss.iconButton} onClick={toggleFormVisibility} aria-label="Open form">
                                <svg className={cntFormscss.arrow} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.5 3.125C17.5 2.77982 17.2202 2.5 16.875 2.5H9.375C9.02982 2.5 8.75 2.77982 8.75 3.125C8.75 3.47018 9.02982 3.75 9.375 3.75H15.3661L2.68306 16.4331C2.43898 16.6771 2.43898 17.0729 2.68306 17.3169C2.92714 17.561 3.32286 17.561 3.56694 17.3169L16.25 4.63388V10.625C16.25 10.9702 16.5298 11.25 16.875 11.25C17.2202 11.25 17.5 10.9702 17.5 10.625V3.125Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* 오버레이가 보이는 경우에만 전체 화면을 덮는 오버레이를 추가 */}
            {isMobile && isFormVisible && (
                <div className={cntFormscss.overlay}>
                    <div className={cntFormscss.formOverlay}>
                        <div className={cntFormscss.textbox}>
                            <h2>CONTACT US</h2>
                            <p className="mb-0">서울 강남구 테헤란로13길 31-1</p>
                            <p className="mb-0">02) 3460-4992</p>
                            <p className="mb-0">UDC@illycaffe.co.kr</p>

                        </div>
                        <FormFields
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                        <button className={cntFormscss.closeButton} onClick={toggleFormVisibility} aria-label="Close form">
                            <svg className={cntFormscss.closeicon} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.14645 2.85355C1.95118 2.65829 1.95118 2.34171 2.14645 2.14645C2.34171 1.95118 2.65829 1.95118 2.85355 2.14645L8 7.29289L13.1464 2.14645C13.3417 1.95118 13.6583 1.95118 13.8536 2.14645C14.0488 2.34171 14.0488 2.65829 13.8536 2.85355L8.70711 8L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L8 8.70711L2.85355 13.8536C2.65829 14.0488 2.34171 14.0488 2.14645 13.8536C1.95119 13.6583 1.95119 13.3417 2.14645 13.1464L7.29289 8L2.14645 2.85355Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contact;
