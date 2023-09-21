import styled from "styled-components"


const NoPage = () => {
    return (
        <NotFoundContainer>
            <h1>404 page not found</h1>
        </NotFoundContainer>
    )
    }


    const NotFoundContainer = styled.div`
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ff0000;
        text-transform: capitalize;
    `



export default NoPage;