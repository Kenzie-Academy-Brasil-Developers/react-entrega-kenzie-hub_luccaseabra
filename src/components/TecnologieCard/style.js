import styled from "styled-components";

const StyledCard = styled.li`
    padding: 1rem;
    /* border: 2px solid blue; */
    background-color: var(--color-grey-4);
    list-style: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: .3rem;

    cursor: pointer;

    :hover{
        background-color: var(--color-grey-2);
    }

`

export default StyledCard;