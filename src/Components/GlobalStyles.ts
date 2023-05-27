import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body {
    background: url('../../public/assets/background-stars.svg'), #070724;
    
    color: white
    } 
    
    a:-webkit-any-link {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
`;
