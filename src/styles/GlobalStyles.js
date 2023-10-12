import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
:root{
    --bg-color: #fff8f0;
    --blue-dark: linear-gradient(139deg, #182f27 0%, #223b2f 100%);;
    --green: #84a98c;
    --maiz: #fca311;
    --orange: #cf3838;
    --red-button: #c11b13;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
}
html{
    scroll-behavior: smooth;
}
body{
    /* background:var(--blue-dark); */
    background-color: #fff8f0;
    width: 100%;
    font-family: 'Lato', sans-serif;
    color: #4e4b4b ;
}
li{
    list-style: none;
}
a{
    color: white;
}
`