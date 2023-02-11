import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem;
    min-height: 100vh;

    background-color: var(--color-grey-4);

    color: var(--color-grey-0);

    img{
        width: 6.25rem;
        margin: 5.06rem 0 1.25rem;
    }
    .formContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        
        width: 90%;
        max-width: 25rem;
        padding: 1rem;

        background-color: var(--color-grey-3);
        border-radius: var(--radius-default);
    }

    .formContainer h1{
        margin: 2rem 0 2.5rem;
        font-size: 1rem;
        font-weight: 700;
    }

    a{
        border-radius: var(--radius-default);
        text-decoration: none;
        color: #fff;
        margin: 1rem 0 2rem;
        width: 100%;
        text-align: center;

        box-sizing: border-box;
    }

    small{
        font-size: .7rem;
        font-weight: 400;
        color: var(--color-grey-1);
    }

    
`

export default StyledMain;