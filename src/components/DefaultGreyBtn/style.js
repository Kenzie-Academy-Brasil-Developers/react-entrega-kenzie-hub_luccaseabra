import styled from "styled-components";

const StyledDefaultBtn = styled.button`
    padding: .75rem;
    border: none;
    border-radius: .4rem;
    background-color: var(--color-grey-3);
    color: #ffffff;
    cursor: pointer;

    :hover{
        background-color: var(--color-grey-2);
    }
`   

export default StyledDefaultBtn;