import { useContext } from "react";
import europa from "../../assets/destination/image-europa.png";
import mars from "../../assets/destination/image-mars.png";
import moon from "../../assets/destination/image-moon.png";
import titan from "../../assets/destination/image-titan.png";
import { PageContext } from "../contexts/PageContext";
import { StyledDestImage } from "./style";

const images = [
  { name: "moon", image: moon },
  { name: "mars", image: mars },
  { name: "europa", image: europa },
  { name: "titan", image: titan },
];

export const DestinationImage = () => {
  const { destination } = useContext(PageContext);
  const currentDestination = images.filter((item) => item.name === destination);

  return <StyledDestImage src={currentDestination[0].image} alt="" />;
};
