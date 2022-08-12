import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

import one from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import two from "../../assets/technology/image-space-capsule-landscape.jpg";
import three from "../../assets/technology/image-spaceport-landscape.jpg";

import _one from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import _two from "../../assets/technology/image-space-capsule-portrait.jpg";
import _three from "../../assets/technology/image-spaceport-portrait.jpg";
import { TechPicture } from "./styles";

/**
 *   function trocaImagem(objeto) {
    return css`
      background-image: url(${objeto.image});
      width: 103.7%;

      @ media (min-width: 1000px) {
        background-image: url(${objeto.desktop});
        width: 500px;
      }
    `;
  }
 * 
 */
const images = [
  { name: "Launch vehicle", image: one, desktop: _one },
  { name: "Spaceport", image: two, desktop: _two },
  { name: "Space capsule", image: three, desktop: _three },
];

export const TechImage = () => {
  const { techs } = useContext(PageContext);
  const currentPicture = images.find((item) => item.name === techs);

  return <TechPicture myImage={currentPicture} />;
};
