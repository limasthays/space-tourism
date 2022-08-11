import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

import one from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import two from "../../assets/technology/image-space-capsule-landscape.jpg";
import three from "../../assets/technology/image-spaceport-landscape.jpg";
import { StyledTechImage } from "./style";

const images = [
  { name: "Launch vehicle", image: one },
  { name: "Spaceport", image: two },
  { name: "Space capsule", image: three },
];

export const TechImage = () => {
  const { techs } = useContext(PageContext);
  const currentPicture = images.filter((item) => item.name === techs);

  return <StyledTechImage src={currentPicture[0].image} />;
};
