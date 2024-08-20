import styled from "styled-components";

export const Container = styled.div`
  max-width: 42.8rem;
  height: 100%;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin: 3.6rem 0 0 5rem;
  gap: 3px;

  font-size: 2.4rem;
  font-weight: 500;
  font-style: normal;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: none;
  border: none;
`;

export const DetailsSection = styled.section`
  max-width: 30rem;
  margin: 1.6rem auto;
`;

export const DishDescription = styled.section`
  text-align: center;

  h2 {
    font-family: "Poppins";
    font-size: 2.7rem;
    font-weight: 500;

    margin-top: 1.6rem;
    margin-bottom: 1rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  p {
    font-family: "Poppins";
    font-size: 1.6rem;
    font-weight: 500;

    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;

export const TagSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;

export const OrderControls = styled.div`
  display: flex;
  margin-top: 2rem;

  margin-bottom: 80px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  span {
    margin: 0 5px;
    font-size: 2.2rem;
  }

  svg {
    font-size: 2.7rem;
    margin: 0 5px;
  }
`;

export const SubmitOrder = styled.button`
  width: 20rem;
  height: 4rem;

  margin-left: 2.5rem;
  padding: 0.8rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 1.2rem;
  font-weight: 500;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 4px;

  svg {
    font-size: 2.8rem;
  }
`;
