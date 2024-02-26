import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 42.8rem;

  margin-top: 8rem;

  .section-footer {
    height: 7.7rem;
    display: flex;
    align-items: center;
    gap: 4px;

    position: fixed;
    bottom: 0;
    flex-shrink: 0;

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

  }
`;
