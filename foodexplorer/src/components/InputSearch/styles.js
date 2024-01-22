import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin-top: 5.6rem;
  margin-left: 2.8rem;

  input {
    height: 2.4rem;
    width: 28.8rem;

    padding: 1.2rem 1.4rem;
    padding-left: 3.9rem;

    font-style: "normal";
    font-weight: 400;
    line-height: 1.6rem;

    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    position: absolute;
    left: 1rem;
  }
`;
