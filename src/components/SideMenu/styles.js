import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 100vh;
  margin: 0 auto;

  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
`;

export const HeaderMenu = styled.div`
  height: 11.4rem;

  display: flex;
  align-items: center;
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
