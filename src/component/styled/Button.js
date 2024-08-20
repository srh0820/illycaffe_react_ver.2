import styled from 'styled-components';

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.8px;
    color: #ffffff;
    background-color: #D9261C;
    border-radius: 30px;
    border: 1px solid #D9261C;
    cursor: pointer;
    width: 160px;
    height: 42px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    transition: color 0.4s ease;

    &:hover {
        color: #D9261C; 
    }

    &::before {
        content: '';
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #ffffff; 
        z-index: -1;
        transition: bottom 0.4s ease; 
    }

    &:hover::before {
        bottom: 0;
    }
    
    @media (max-width: 768px) {
        width: 120px;
        height: 36px;
    }
`;

export default Button;
