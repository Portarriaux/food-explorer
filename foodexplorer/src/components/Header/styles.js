import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  
  max-width: 42.8rem;;
  height: 11.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  gap: 7.4rem;
`;

export const Menu = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    font-size: 24px;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  > h1 {
    font-family: 'Roboto';
    font-style: normal;
    line-height: normal;
    font-size: 2.1rem;
    font-weight: 700;
  }
`;

export const ReceiptButton = styled.button`
  position: relative;

  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  span {
    display: block;
    height: 20px;
    width: 20px;

    position: absolute;
    bottom: 55%;
    left: 57%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 99px;
  }

  svg {
    font-size: 3.2rem;
  }
`;
