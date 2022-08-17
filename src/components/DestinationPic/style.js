import styled from "styled-components";

export const StyledDestImage = styled.img`
  width: 175px;
  src: url(${(props) => props.src});

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1000px) {
    width: 38%;
  }
`;
