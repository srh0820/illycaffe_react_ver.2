import React, { useState } from 'react';

import cntFormscss from './scss/contactForm.module.scss';
import FormFields from './contact/FormFields';  

function Contact() {
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
                <div className={`${cntFormscss.imgArea} col-6`}></div>
            </div>
        </section>
    );
}

export default Contact;
