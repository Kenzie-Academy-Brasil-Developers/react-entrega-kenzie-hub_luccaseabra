import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: 6rem 0 3rem;
    min-height: 100vh;

    background-color: var(--color-grey-4);

    color: var(--color-grey-0);

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
        margin: 2rem 0 1rem;
        font-size: 1.3rem;
        font-weight: 700;
    }

    small{
        font-size: .8rem;
        font-weight: 400;
        color: var(--color-grey-1);
        margin-bottom: 2.5rem;
    }


`

export default StyledMain