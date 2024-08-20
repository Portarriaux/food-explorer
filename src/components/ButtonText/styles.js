import styled from "styled-components"

export const Container = styled.button`
    font-family: 'Poppins';
    font-size: 1.4rem;
    font-weight: 500;
    
    margin-left: 3rem;
    white-space: nowrap;
    
    background:  none;
    border: none;


    color: ${({ theme }) => theme.COLORS.WHITE};
    

`;