import styled from "styled-components";

export const StyledDestButtons = styled.div`
  display: flex;
  gap: 16px;
  button {
    font-family: "Barlow Condensed", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 2.3625px;
    color: #ffffff;
    text-transform: uppercase;

    background: none;
    border: none;

    cursor: pointer;

    &:hover,
    :focus {
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
  }
`;
