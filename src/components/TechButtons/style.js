import styled from "styled-components";

export const StyledTechButton = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  button {
    cursor: pointer;
    border-radius: 40px;
    width: 40px;
    height: 40px;
    border: 1px solid white;
    color: white;
    background-color: transparent;
    opacity: 0.25;

    font-family: "Bellefair", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;

    &:hover,
    &:focus {
      background-color: white;
      color: #0b0d17;
      opacity: unset;
    }
  }
`;
