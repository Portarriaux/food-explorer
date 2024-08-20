import styled from "styled-components";

export const Container = styled.section`
  border: solid 4px red;
  margin: 4.4rem 9rem;

  > h2 {
    font-family: "Poppins";
    font-size: 3.2rem;
    font-weight: 500px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
