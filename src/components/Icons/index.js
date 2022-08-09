import styled from "styled-components";

export const Icon = styled.img`
  src: ${(props) => props.src};
  width: auto;
  height: auto;

  visibility: ${(props) =>
    props.conditional && (props.menu ? "hidden" : "visible")};
`;
