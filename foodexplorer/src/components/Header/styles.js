import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 42.8rem;
  height: 11.4rem;

  display: flex;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Navigate = styled.div`
  display: flex;
  margin: auto;
  gap: 4rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    gap: 20rem;
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 5rem;
    padding: 0 2.5rem;
  }
`;

export const Menu = styled.button`
  display: block;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > svg {
    font-size: clamp(3.4rem, 8.5vh, 2.7rem);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
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

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
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
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > h1 {
    font-family: "Roboto";
    font-style: normal;
    line-height: normal;
    font-size: 2.1rem;
    font-size: clamp(2.5rem, 3.9vw, 2.8rem);
`;

export const ReceiptButton = styled.button`
  position: relative;

  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  .count {
    height: 2rem;
    width: 2rem;

    position: absolute;
    bottom: 55%;
    left: 57%;

    border-radius: 99px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  svg {
    font-size: clamp(4.5rem, 3.6vh, 4.3rem);
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 21.6rem;
    height: 5.6rem;

    padding: 1.2rem 3.2rem;
    display: flex;
    align-items: center;
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
  padding-right: 1rem;
  align-self: end;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;
