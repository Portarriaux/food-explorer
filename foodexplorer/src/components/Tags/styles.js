import styled from "styled-components";

export const Container = styled.span`
  width: 6.9rem;
  height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 4px 8px;

  font-family: "Poppins";
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
