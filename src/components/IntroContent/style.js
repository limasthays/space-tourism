import styled from "styled-components";

export const StyledIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  span {
    font-family: "Barlow Condensed", sans-serif;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 2.7px;
    color: #d0d6f9;
  }
  h1 {
    font-family: "Bellefair", serif;

    font-weight: 400;
    font-size: 80px;
    line-height: 100px;
    text-align: center;
    color: #ffffff;
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;

    text-align: center;

    color: #d0d6f9;
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    margin-top: 80px;

    width: 150px;
    height: 150px;
    border-radius: 100px;

    p {
      font-family: "Bellefair";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;

      text-align: center;
      letter-spacing: 1.25px;

      color: #0b0d17;
    }
  }
`;
