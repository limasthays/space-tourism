import styled from "styled-components";

export const StyledCrewImage = styled.div`
  display: flex;
  justify-content: center;
  height: 223px;
  width: 300px;

  img {
    max-height: 100%;
  }

  @media (min-width: 768px) {
    order: 4;

    height: 423px;
    width: 500px;
  }

  @media (min-width: 768px) {
    height: 523px;
    width: 600px;
  }
`;
