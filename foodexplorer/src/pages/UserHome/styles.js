import styled from "styled-components";

export const Container = styled.div`
  max-width: 42.8rem;
  margin: 0 auto;
`;

export const LogoHome = styled.div`
  height: 12rem;
  max-width: 39.6rem;
  display: flex;
  margin: 4.4rem auto;

  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.COLORS.GRADIENT_START} 0%,
    ${({ theme }) => theme.COLORS.GRADIENT_END} 100%
  );

  img {
    transform: translateY(-20%) translateX(-15%);
  }

  .logo-info-home {
    align-self: center;

    h1 {
      font-family: "Poppins";
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 600;
      margin-bottom: 3px;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    p {
      font-family: "Poppins";
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

export const Description = styled.div`
  margin-left: 24px;

  font-family: "Poppins";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
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
