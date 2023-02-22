import styled from "styled-components";

const StyledMain = styled.main`
    min-height: 100vh;
    background-color: var(--color-grey-4);
    color: var(--color-grey-0);
    padding: 6rem 0 3rem;
    
    .mainHeader{
        box-shadow: 0 0 3px #f1f1f150;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 1.5rem 1rem ;
    }

    .infoContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .7rem;

        width: 100%;
        max-width: 48rem;
    }
    h1{
        font-size: 1rem;
        font-weight: 700;
    }
    small{
        color: var(--color-grey-1);
        font-size: .75rem;
        font-weight: 600;
    }

    .tecnologiesContainer{
        max-width: 48rem;
        margin: 0 auto;
        padding: 1.5rem 1rem ;
    }

    .tecnologiesHeader{
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
    }

    ul.tecnologiesList{
        padding: 1.5rem;
        border-radius: .4rem;
        background-color: var(--color-grey-3);

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .loading{
        width: 100vw;
        text-align: center;
        margin-top: 12rem;
    }

    @media(min-width: 768px){
        .infoContainer{
            flex-direction: row;
            justify-content: space-between;
        }
    }
`

export default StyledMain