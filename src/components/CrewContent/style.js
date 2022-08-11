import styled from "styled-components";

export const StyledCrewContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }

  h2 {
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;

    margin-top: 8px;
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

  @media (min-width: 768px) {
    .crew--content {
      width: 458px;
    }
  }

  @media (min-width: 1000px) {
    .crew--content {
      width: 500px;
      h3,
      h2,
      p {
        text-align: left;
      }
      h3 {
        font-size: 32px;
        line-height: 37px;
      }
      h2 {
        font-size: 56px;
        line-height: 64px;
      }
      p {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
`;
