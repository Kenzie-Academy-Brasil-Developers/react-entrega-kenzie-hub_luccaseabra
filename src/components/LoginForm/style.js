import styled from "styled-components";

const StyledForm = styled.form`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    gap: .3rem;

    label{
        font-size: .8rem;
        color: var(--color-grey-1);
    }
    input{
        background-color: var(--color-grey-2);
        outline: none;
        border: 2px solid transparent;
        padding: .8rem .5rem;
        margin-bottom: 1rem;
        border-radius: var(--radius-default);

        text-align: left;
        color: var(--color-grey-1);
        font-size: .9rem
    }
    input:focus{
        border-color: var(--color-grey-1);
    }

    .passwordInputContainer{
        background-color: var(--color-grey-2);
        position: relative;
    }
    .passwordInputContainer input{
        margin: 0;
        width: 100%;
        box-sizing: border-box;
    }
    .passwordInputContainer svg{
        position: absolute;
        top: .8rem;
        right: .7rem;
        color: var(--color-grey-0);
    }
`

export default StyledForm;