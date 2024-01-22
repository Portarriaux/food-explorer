import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 42.8rem;
  height: 100vh;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  height: 11.4rem;
  gap: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > button {
    margin-left: 2.6rem;
    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    background: none;
  }

  svg {
    font-size: 1.8rem;
  }
`;
