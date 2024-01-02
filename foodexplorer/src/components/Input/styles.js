import styled from "styled-components";

export const Container = styled.div`
  width: 100%;


  > label {
    display: block;
    margin-bottom: 8px;
  }
  font-family: "Roboto";
  font-size: 1.6rem;
  font-style: "normal";
  font-weight: 400;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  > input {
    font-weight: 400;
    height: 3.4rem;

    width: 28.8rem;

    padding: 1.2rem 1.4rem; 
    margin-bottom: 3.2rem;

    border-radius: 8px;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
