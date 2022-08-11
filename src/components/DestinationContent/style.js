import styled from "styled-components";

export const StyledDestinationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 60px;

  .destination-content,
  .destination-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  h1 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
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

  hr {
    border: 1px solid #383b4b;
    width: 100%;
  }

  span {
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2.3625px;
    text-transform: uppercase;
    color: #d0d6f9;
    margin-bottom: 12px;

    display: block;
  }

  h4 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }

  @media (min-width: 768px) {
    .destination-content {
      width: 570px;

      h1 {
        font-size: 80px;
        line-height: 92px;
      }

      p {
        font-size: 16px;
        line-height: 28px;
      }
    }

    .destination-info {
      flex-direction: row;
      align-self: center;
    }
  }

  @media (min-width: 1000px) {
    align-items: flex-start;
    gap: 38px;

    margin-left: 10%;
    h1 {
      text-align: start;
    }
    p {
      text-align: start;
    }

    .destination-info {
      align-self: flex-start;

      div {
        span {
          text-align: left;
        }
        h4 {
          text-align: left;
        }
      }
    }

    .destination-content {
      row-gap: 38px;
    }
  }
`;
