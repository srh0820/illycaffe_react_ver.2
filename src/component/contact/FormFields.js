import React from 'react';

import cntFormscss from '../scss/contactForm.module.scss';

const FormFields = ({ formData, handleChange, handleSubmit }) => {
    return (
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
                        placeholder="성명"
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
                        placeholder="이메일"
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
                        placeholder="문의 내용"
                        required
                    />
                </div>
                <div className={cntFormscss.form_group}>
                    <button type="submit" className={cntFormscss.btn_field}>보내기</button>
                </div>
            </form>
        </div>
    );
};

export default FormFields;
