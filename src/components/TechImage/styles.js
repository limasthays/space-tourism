import styled from "styled-components";

export const TechPicture = styled.div`
  width: 100%;
  height: 170px;

  background-image: url(${(props) => props.myImage.image});
  background-size: cover;

  @media (min-width: 768px) {
    width: 768px;
    height: 310px;
  }

  @media (min-width: 1000px) {
    background-image: url(${(props) => props.myImage.desktop});
    width: 515px;
    height: 527px;
  }
`;
