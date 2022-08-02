import styled from "styled-components";

export const StyledMenuMobile = styled.div`
  width: 75%;
  height: 100%;
  align-self: flex-end;
  justify-self: flex-end;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  position: absolute;

  margin-top: -24px;
  margin-right: -24px;

  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);

  display: flex;

  img {
    width: 19px;
    height: 19px;
  }
`;
