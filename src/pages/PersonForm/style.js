import styled from 'styled-components';

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    height: 300px;
    margin-top: 15px;
`

export const Input = styled.input `
    height: 40px;
    border: 1px solid #DCE1E5;
    font-size: 16px;
    color: #8E959A;
    &&::placeholder {
        color: #BBB;
        opacity: 1;
    }
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #7bdb9b;
    }

    ${props => props.errors && ({
        outline: 'none',
        boxShadow: '0px 0px 2px #f84545',
    })}
`

export const SubmitButton = styled.button `
    width: 30%;
    height: 40px;
    align-self: flex-end;
    background: #2bc45e;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 18px;
    border-radius: 13px;
`