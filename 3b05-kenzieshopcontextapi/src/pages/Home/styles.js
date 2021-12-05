import styled from 'styled-components'

export const Container = styled.div`
`
export const ProductList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap ;
figure{
    display: flex;
    justify-content: center;
}
div{
    min-width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img{
    width: 100px;

}
button{
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #403CAA;
    color: white;
    font-size: 1.1rem;

}

span{
    margin-top: 10px;
}
strong{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}


@media screen and (min-width: 1788px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap ;

    strong{
        width: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-overflow: ellipsis;
}
    li{
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    button{
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #403CAA;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
}
}
@media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    strong{
        width: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-overflow: ellipsis;
}
    li{
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    button{
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #403CAA;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
}
}

`
