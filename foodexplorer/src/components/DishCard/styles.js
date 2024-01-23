import styled from "styled-components";

export const Container = styled.div`
  max-width: 20rem;
  height: 24.4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 24px;
  padding: 1rem;

  gap: 7px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > svg {
    padding: 0 16px;
    align-self: flex-end;
    stroke-width: 2px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.SKY_BLUE};

    span {
      padding: 4px;
    }
  }
`;

export const ActionButtons = styled.div`
  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  span {
    margin: 0 5px;
    font-size: 1.8rem;
  }
`;

export const ButtonAdd = styled.button`
  height: 3.2rem;
  width: 15rem;
  padding: 1.2rem 2.4rem;
  text-align: center;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: "Poppins";
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: 0;
  border-radius: 5px;

  color: ${({ theme }) => theme.COLORS.WHITE};
`;
