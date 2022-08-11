import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";
import { StyledCrewImage } from "./styled";

const images = [
  { name: "Douglas Hurley", image: douglas },
  { name: "Mark Shuttleworth", image: mark },
  { name: "Victor Glover", image: victor },
  { name: "Anousheh Ansari", image: ansari },
];

export const CrewImage = () => {
  const { crew } = useContext(PageContext);
  const currentMember = images.filter((member) => member.name === crew);
  return (
    <StyledCrewImage>
      <img src={currentMember[0].image} alt="" />
    </StyledCrewImage>
  );
};
