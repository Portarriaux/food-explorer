import styled from "styled-components";

export const Button = styled.button`
  min-width: 34rem;

  padding: 0 0 10px 1rem;
  margin: 3.6rem 0 0 2.8rem;

  font-size: 2.1rem;
  font-weight: 300;
  font-style: normal;
  text-align: start;

  background: none;
  border: none;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.DARK_100};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
