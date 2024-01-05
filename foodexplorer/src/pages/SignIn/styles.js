import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled.div`
  height: 100vh;

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    display: flex;
    margin-left: 15.3rem;
  }
`;

export const LogoAndHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 7.3rem;
  margin-right: 6rem;

  gap: 8px;

  > h1 {
    font-family: "Roboto";
    font-size: clamp(3.5rem, 2vw, 4rem);
    font-style: "normal";
    font-weight: 700;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-bottom: 20.5rem;
    gap: 18px;
    flex-shrink:0;
  }
`;

export const Form = styled.form`
  max-width: 31.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding-top: 7.3rem;
`;
