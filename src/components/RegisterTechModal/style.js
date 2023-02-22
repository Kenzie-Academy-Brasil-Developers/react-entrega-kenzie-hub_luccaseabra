import styled from "styled-components";

const StyledModal = styled.div`
    background-color: #00000080;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-grey-0);

    .modalContainer{
        background-color: var(--color-grey-3);
        width: 90%;
        max-width: 23rem;
        border-radius: .3rem;
        overflow: hidden;
    }

    .formHeader{
        background-color: var(--color-grey-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .75rem 1.25rem;
    }
    
    .formHeader > button {
        background-color: transparent;
        font-size: 1.2rem;
        color: var(--color-grey-1);
    }
    .formHeader > button:hover {
        color: var(--color-grey-0);
        transform: scale(1.1);
    }

    form{
        padding: .75rem 1.25rem 2rem;
        display: flex;
        flex-direction: column;
    }

    form label {
        font-weight: 400;
        font-size: .8rem;
        color: var(--color-grey-1);
        margin-bottom: .3rem;
    }

    form input, form select{
        background-color: var(--color-grey-2);
        padding: .625rem 1rem;
        border: 1px solid var(--color-grey-1);
        border-radius: .3rem;
        color: var(--color-grey-1);
    }
    form input:focus, form select:focus {
        border: 2px solid var(--color-primary-focus);
    }

    form input {
        outline: none;
    }

    form .errorMessage{
        font-size: .7rem;
        font-weight: 500;
        color: var(--color-negative);
        margin: .4rem 0 1rem;
    }
`

export default StyledModal;