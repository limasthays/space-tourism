import styled from "styled-components";

export const StyledMenuDesktop = styled.div`
  display: none;

  margin: -24px -24px 0px 0px;

  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  .ul-desktop {
    display: flex;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 450px;
    height: 96px;

    .ul-desktop {
      column-gap: 25px;
    }
  }

  @media (min-width: 1000px) {
    width: 830px;

    .ul-desktop {
      column-gap: 30px;
      span {
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
      }
    }
  }
`;
