import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  height: 11.4rem;
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Navigate = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  gap: 7.4rem;
  padding: 0 4rem;
`;

export const Menu = styled.button`
  display: block;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    font-size: 2.4rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 7rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;

export const SearchBarInput = styled.input`
  min-width: 55.3rem;
  height: 2.4rem;

  padding: 1.2rem;
  padding-left: 10rem;
  font-size: 1.6rem;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 5px;

  &::placeholder {
    font-family: "Roboto";
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 8px;

  > h1 {
    font-family: "Roboto";
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

  .count {
    height: 20px;
    width: 20px;

    position: absolute;
    bottom: 55%;
    left: 57%;
    border-radius: 99px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  svg {
    font-size: 3.2rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 21.6rem;
    height: 5.6rem;

    padding: 1.2rem 3.2rem;
    display: flex;
    gap: 8px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 5px;

    .count {
      display: none;
    }

    &:after {
      content: "Pedido (0)";
      display: flex;
      align-items: center;
      align-self: center;

      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const LogoutButton = styled.button`
  font-size: 3rem;
  padding-right: 10px;
  align-self: end;
  
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: none;
  }
`;
