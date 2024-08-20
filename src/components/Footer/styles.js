import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  .section-footer {
    height: 3rem;
    padding: 3rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    flex-shrink: 0;

    .footer-container {
      display: flex;
      gap: 1.0rem;
    }
    
    h2 {
      font-size: 1.8rem;
      flex-shrink: 0;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    img {
      object-fit: cover;
    }
    
    .logo-and-title {
      padding-left: 9rem;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
      justify-content: space-around;
    }
  }
  

`;

