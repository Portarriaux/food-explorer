import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  margin: 0 auto;
`;

export const LogoHome = styled.div`
  height: 12rem;
  max-width: 39.6rem;

  display: flex;
  align-items: center;
  margin: 4.4rem auto;

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_START} 0%,
    ${({ theme }) => theme.COLORS.GRADIENT_END} 100%
  );

  img {
    width: 19.1rem;
    min-height: 14.9rem;
    transform: translateY(-9%) translateX(-10%);
  }

  .logo-info-home {
    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 3px;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    p {
      font-family: "Roboto";
      font-style: normal;
      font-size: 1.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    min-width: 110rem;
    height: 22rem;

    align-items: center;
    margin-top: 10rem;

    img {
      height: 28rem;
      width: auto;

      transform: translateY(-10%) translateX(-12%);
    }

    .logo-info-home {
      h1 {
        font-size: 3rem;
        font-style: normal;
        font-weight: 500;
      }

      p {
        font-size: 2rem;
        max-width: 38rem;
      }
    }
  }
`;

export const Description = styled.div`
  margin-left: 2.4rem;

  font-family: "Poppins";
  font-size: clamp(1.8rem, 4vw, 2.4rem);

  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-right: 1.5rem;
  }
`;

export const CardRef = styled.div`
  display: flex;
`;

export const CardMain = styled.div`
  display: flex;
`;

export const CardMainExtra = styled.div`
  display: flex;
`;
