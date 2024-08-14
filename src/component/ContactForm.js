import React, { useState } from 'react';

import cntFormscss from './scss/contactForm.module.scss';

function ContactForm() {
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
        // submit_form.php 대신 백엔드와 통신하거나 폼 데이터를 처리하는 로직을 여기에 추가하기
        console.log('Form submitted:', formData);
    };

    return (
        <section className={cntFormscss.contactForm}>
            <div className={cntFormscss.conForm}>
                <div className={`${cntFormscss.formArea} col-6`}>
                    <div className={cntFormscss.textbox}>
                        <h2 className="mb-0">CONTACT US</h2>
                        <p className="mb-0">서울 강남구 테헤란로13길 31-1 (일리빌딩)</p>
                        <div className="d-flex">
                            <p className="mb-0 me-3">02) 3460-4992</p>
                            <p className="mb-0">UDC@illycaffe.co.kr</p>
                        </div>
                    </div>
                    <div className={cntFormscss.form}>
                        <form onSubmit={handleSubmit}>
                            <div className={cntFormscss.form_group}>
                                <input
                                    type="text"
                                    className={cntFormscss.input_field}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="   성명"
                                    required
                                />
                            </div>
                            <div className={cntFormscss.form_group}>
                                <input
                                    type="email"
                                    className={cntFormscss.input_field}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="   이메일"
                                    required
                                />
                            </div>
                            <div className={cntFormscss.form_group}>
                                <textarea
                                    id="message"
                                    className={cntFormscss.msg_field}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="   문의 내용"
                                    required
                                />
                            </div>
                            <div className={cntFormscss.form_group}>
                                <button type="submit" className={cntFormscss.btn_field}>보내기</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`${cntFormscss.imgArea} col-6`}></div>
            </div>
        </section>
    );
};

export default ContactForm;
