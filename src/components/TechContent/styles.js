import styled from "styled-components";

export const StyledTechContent = styled.div`
  span {
    display: block;
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    color: #d0d6f9;
  }

  h1 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 9px;
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #d0d6f9;
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    span {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }

    h1 {
      font-size: 40px;
      line-height: 46px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (min-width: 1000px) {
    order: -1;

    width: 470px;
  }
`;
