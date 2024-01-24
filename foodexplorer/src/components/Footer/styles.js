import styled from "styled-components";

export const Container = styled.div`
    width: 42.8rem;
    height: 7.7rem;

    display: flex;
    align-items: center;
    padding-left: 2rem;

    position: fixed;
    bottom: 0;

    gap: 4px;
    flex-shrink: 0;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  h2 {
    font-family: "Roboto";
    font-style: normal;
    line-height: normal;
    font-size: 1.6rem;
    font-weight: 700;
    padding-left: 8px;
    flex-shrink: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  p {
    margin-left: 15px;
    flex-shrink: 0;
  }
`;