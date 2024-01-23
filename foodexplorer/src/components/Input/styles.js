import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > label {
    display: block;
    margin-bottom: 8px;
  }  
  > input {
    width: 28.8rem;
    height: 2.4rem;
  
    padding: 1.2rem 1.4rem;
    margin-bottom: 3.2rem;

    font-style: "normal";
    font-weight: 400;
    line-height: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
