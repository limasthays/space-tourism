import styled from "styled-components";

export const StyledFirstLine = styled.div`
  margin-top: 24px;
  h3 {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    color: white;
    span {
      opacity: 0.25;
    }
  }

  @media (min-width: 768px) {
    align-self: flex-start;

    h3 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
    }
  }
`;
