import {styled } from "styled-components";
export const RecommendedSection= styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const RecommededCardsStyled= styled.div`
    display: flex;
    padding: 2rem 0;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
`;
export const CardRecommended= styled.div`
    width: 350px;
    height: 130px;
    gap: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #84a59d70;
    padding: 0 20px;
    border-radius: 10px;
    position: relative;
    &  button{
        font-weight: 600;
        font-size: 1.5rem;
        position: absolute;
        top: 0%;
        right: 0;
        border-radius: 0 10px 0;
    }
    
`;
export const ImgCard= styled.img`
    width: 110px;
    height: 110px;
    border-radius: 5px;
    position: absolute;
    left: 10px;
    object-fit: cover;

`;
export const TextCard= styled.div`
display: flex;
flex-direction: column;
margin-left: 70px;
width: 174px;
gap: 5px;
h3{
    color: #487876;
}
p{
    background: linear-gradient( to top, #7f6a49, #a98467);
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;
    font-weight: 600;
    font-size: 1.3em;
}
span{
 color: gray;
}
`