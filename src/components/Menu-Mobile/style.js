import styled from "styled-components";

export const StyledMenuMobile = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
  height: 100vh;
  position: absolute;
  top: 0px;
  right: 0px;
  /*margin-right: -24px;*/

  align-self: flex-end;
  justify-self: flex-end;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  padding: 33px 25px 0px 33px;

  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  img {
    width: 19px;
    height: 19px;

    align-self: flex-end;
  }

  li {
    margin-top: 40px;
    font-size: 16px;

    span + span {
      margin-left: 14px;
    }
  }
`;
