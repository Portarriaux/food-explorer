import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const LogoAndHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7.3rem;
  margin-right: 6rem;
  gap: 8px;

 

  > h1 {
    font-family: "Roboto";
    font-size: clamp(3.5rem, 2vw, 4rem);
    font-style: "normal";
    font-weight: 700px;
  }
`;

export const Form = styled.form`
  max-width: 31.6rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
