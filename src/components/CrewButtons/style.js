import styled from "styled-components";

export const StyledCrewButtons = styled.div`
  display: flex;
  gap: 26px;

  button {
    border: none;
    background-color: transparent;

    img {
      cursor: pointer;
    }

    &:hover,
    &:focus {
      opacity: 0.17;
    }
  }

  @media (min-width: 768px) {
    order: 3;
  }
`;
