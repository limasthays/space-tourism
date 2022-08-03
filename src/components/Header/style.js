import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    .mobile-menu-item {
      visibility: hidden;
    }
  }
`;
