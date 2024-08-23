import React, { useState, useEffect } from 'react';

import cntFormscss from './scss/contactForm.module.scss';
import FormFields from './contact/FormFields';

function Contact() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
                        <FormFields
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div> 
                </div>
                <div className={`${cntFormscss.imgArea} col-6`}>
                    {isMobile && (
                        <div className={cntFormscss.overlayText}>
                            <h2 className='mb-0'>CONTACT US</h2>
                            <button className={cntFormscss.iconButton}>
                                <svg className={cntFormscss.arrow} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.5 3.125C17.5 2.77982 17.2202 2.5 16.875 2.5H9.375C9.02982 2.5 8.75 2.77982 8.75 3.125C8.75 3.47018 9.02982 3.75 9.375 3.75H15.3661L2.68306 16.4331C2.43898 16.6771 2.43898 17.0729 2.68306 17.3169C2.92714 17.561 3.32286 17.561 3.56694 17.3169L16.25 4.63388V10.625C16.25 10.9702 16.5298 11.25 16.875 11.25C17.2202 11.25 17.5 10.9702 17.5 10.625V3.125Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
