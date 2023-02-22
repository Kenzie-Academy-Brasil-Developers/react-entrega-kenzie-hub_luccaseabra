import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: var(--color-grey-4);
    box-shadow: none;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    
    .container{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 48rem;
        margin: 0 auto;
    }

`

export default StyledHeader;