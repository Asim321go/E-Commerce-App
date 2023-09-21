import styled from "styled-components";


const PageNotFound = () => {
    return (
        <Wrapper>
            <div>
                <h1>Product Not Found!</h1>
                <p>Please check the spelling or try searching for something else</p>
            </div>
        </Wrapper>
    )
}



const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 3px solid #0a66c2;
    border-radius: 5px;
    width: 350px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
   
    h1{
        text-transform: uppercase;
        color: #0a66c2;
        font-weight: 600; 
        font-size: 27px;
    }
    p {
        color: #878787;
        font-size: 17px;
        font-weight: 500;
    }
    @media (max-width: 479px) {
      div{
         
      }
    }
`





export default PageNotFound;