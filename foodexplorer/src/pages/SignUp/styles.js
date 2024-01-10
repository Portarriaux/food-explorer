import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: flex;
    align-items: center;
  }
`;

export const LogoAndHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 7.3rem 6rem 0 0;
  gap: 8px;

  > h1 {
    font-family: "Roboto";
    font-size: clamp(3.5rem, 2vw, 4rem);
    font-style: "normal";
    font-weight: 700;
    flex-shrink: 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-bottom: 20.5rem;
    gap: 10px;
    padding-left: 10rem;
  }
`;

export const Form = styled.form`
  max-width: 31.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding-top: 7.3rem;

  > h2 {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 6.4rem;
    margin: 0 auto;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > h2 {
      margin-bottom: 3.2rem;
      display: block;

      font-family: "Poppins";
      font-size: 3.2rem;
      font-weight: 500;
    }
  }
`;
