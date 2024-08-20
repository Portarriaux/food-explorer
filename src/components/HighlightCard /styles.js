import styled from "styled-components";
export const Container = styled.div`
  margin: 16.4rem 12.4rem 0 12.4rem;
  height: 26rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  img {
    transform: translate(-5.3rem, 1rem);
  }
`;

export const InfoSection = styled.div`
   display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;

    h1 {
      font-family: Poppins;
      font-size: 4rem;
      font-weight: 500;
      line-height: 5.6rem;
    }

    p {
      font-family: Roboto;
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 400;

      -webkit-text-stroke-width: 1;
      -webkit-text-stroke-color: #000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
