import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	vertical-align: baseline;
}
body {
    background: #333333;
    font-family: 'Lato', sans-serif;
    line-height: 1;
}
h1 {
    font-family: 'Oswald', sans-serif;
    color: white;
}

header {
    font-family: 'Passion One', sans-serif;
    font-size: 106px;
    letter-spacing: 5px;
    color: white;
}
`;
export default GlobalStyle;
