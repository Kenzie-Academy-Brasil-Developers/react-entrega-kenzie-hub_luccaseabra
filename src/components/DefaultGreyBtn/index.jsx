import StyledDefaultBtn from "./style";

function DefaultGreyBtn({children, ...rest}) {
    const { btnFunction } = rest;
    
    return (
        <StyledDefaultBtn onClick={btnFunction}>{children}</StyledDefaultBtn>
    )
}

export default DefaultGreyBtn;