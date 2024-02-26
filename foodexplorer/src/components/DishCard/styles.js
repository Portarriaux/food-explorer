import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 20rem;
  height: 24.4rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1.5rem;
  padding: 1rem;

  gap: 7px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > svg {
    font-size: 2.4rem;
    padding: 0 1.6rem;
    stroke-width: 2px;
    align-self: flex-end;

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

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin: 3rem auto;
    height: 40rem;
    width: 30rem;
    padding: 3rem;
    gap: 8px;

    svg {
      font-size: 3.6rem;
    }

    h3,
    p {
      margin: 4px 0;
      font-size: 2.2rem;
    }

    img {
      height: 15rem;
      margin-top: 1.5rem;
      margin-bottom: 5px;
    }

    span {
      padding: 5px;
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
    font-size: 1.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    span {
      font-size: 2.6rem;
    }
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

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.8rem;
    height: 5.5rem;
  }
`;
