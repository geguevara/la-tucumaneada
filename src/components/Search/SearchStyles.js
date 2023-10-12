import styled from "styled-components"

export const FormProducts = styled.form`
    display: flex;
    position: absolute;
    right: 200px;
    top: 100px;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: 970px) {
        right: 30px;
    } 
     
 `   
export const SearchBarProducts = styled.input`
    border:1px solid #d3cccc;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    position: relative;
`
export const SearchBtn = styled.button`
    background-color: whitesmoke;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 1px;
    top: 1px;
    bottom: 1px;
    &:hover{
        background-color: #d6ccc2;
    }
`
export const IconSearch = styled.div`
    font-size: 1.1rem;
`