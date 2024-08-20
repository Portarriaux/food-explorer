import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

:root {
  font-size: 62.5%;
  
}

body {
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
}

body, input, textarea {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
    outline: none;
    }

 button {
    font-family: 'Poppins', sans-serif; 
 }

a {
  text-decoration: none; 
}

button, a {
  cursor: pointer;
  transition: filter 0.3s
}

button:hover, a:hover {
  filter:brightness(0.9)
}



`;
