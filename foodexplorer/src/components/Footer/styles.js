import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 42.8rem;
  height: 7.7rem;

  display: flex;
  align-items: center;
  padding-left: 5px;

  position: sticky;
  bottom: 0;

  flex-shrink: 0;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    .logo-and-title {
      display: flex;
    }

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
    flex-shrink: 0;
    padding: 14px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    display: flex;
    justify-content: space-around
  }
`;
