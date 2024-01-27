import styled from "styled-components";

export const Container = styled.button`
  font-size: 1.4rem;
  font-weight: 500;

  width: 100%;

  padding: 1.2rem 3.2rem;
  margin-bottom: 3.2rem;

  border: none;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
