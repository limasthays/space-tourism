import styled from "styled-components";

export const StyledIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  .lateral {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
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
  }

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;
    margin-top: 80px;

    width: 150px;
    height: 150px;
    border-radius: 150px;

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

  @media (min-width: 768px) {
    row-gap: 155px;
    .lateral {
      width: 450px;
      span {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }
      h1 {
        font-size: 150px;
        line-height: 150px;
      }

      p {
        font-weight: 400;
        font-size: 16px;
      }
    }
    .circle {
      width: 242px;
      height: 242px;
      p {
        font-size: 32px;
      }
    }
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    margin: 0% 5% 0% 5%;
    gap: 30%;

    .lateral {
      width: 444px;
      align-items: flex-start;
      flex-direction: column;

      span,
      h1,
      p {
        text-align: left;
      }
      span {
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.725px;
      }

      h1 {
        font-size: 150px;
        line-height: 172px;
      }

      p {
        font-size: 18px;
        line-height: 32px;
      }
    }

    .circle {
      width: 20vw;
      height: 20vw;
      border-radius: 20vw;

      p {
        font-size: 32px;
        line-height: 37px;
        letter-spacing: 2px;
      }
    }
  }
`;
