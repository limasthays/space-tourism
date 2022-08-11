import styled from "styled-components";

export const StyledTechImage = styled.img`
  width: 100%;
  src: url(${(props) => props.src});

  @media (min-width: 768px) {
    width: 103.7%;
  }
`;
