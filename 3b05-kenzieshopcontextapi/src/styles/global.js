import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: white;
        font-family: Arial, Helvetica, sans-serif;
        list-style: none;
        background-color: #F5F5F5;
    }
    ul{
        list-style: none;
        min-width: 200px;
        padding: 10px;
    }
    .li-cart{
        box-sizing: border-box;
        width: 150%;
    }
    .div-cart{
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cart-img{
        height: 80px;
        margin-left: 7px;
    }
    .span-cart{
        padding: 10px;
    }
    .loading{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
    .header-login{
        background-color: #403CAA;
        margin: 0;
        padding: 20px;
    }
    .logo-login{
        text-align: center;
        color: white;
        margin: 0;
        font-family: Lobster;
    }
    .link-cadastro{
        text-decoration: none;
        color: #403CAA;
        font-size: 0.9rem;
        margin-top: 15px;
    }



@media screen and (min-width: 1788px) {
  .logo-login {
    font-size: 3rem;
  }
}
@media screen and (min-width: 1300px) {
    .logo-login {
    font-size: 3rem;
  }
}
`;

export default GlobalStyle;
