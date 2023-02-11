import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    gap: .3rem;


    label{
        font-size: .8rem;
        color: var(--color-grey-1);
        margin-top: 1rem;
    }
    input{
        background-color: var(--color-grey-2);
        outline: none;
        border: 2px solid transparent;
        padding: .8rem .5rem;
        margin-bottom: .2rem;
        border-radius: var(--radius-default);

        text-align: left;
        color: var(--color-grey-1);
        font-size: .9rem
    }
    input:focus{
        border-color: var(--color-grey-1);
    }

    .errorMessage{
        font-size: .7rem;
        font-weight: 500;
        color: var(--color-negative);
    }

    select{
        background-color: var(--color-grey-2);
        padding: .8rem .5rem;
        margin-bottom: .3rem;
        border: none;
        border-radius: var(--radius-default);

        text-align: left;
        color: var(--color-grey-1);
        font-size: .9rem
    }
    option{
        /* padding: 1rem;
        border-bottom: 1px solid var(--color-grey-1); */
    }
`

export default StyledForm;