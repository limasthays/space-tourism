import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

const images = [
  { name: "douglas", image: douglas },
  { name: "mark", image: mark },
  { name: "victor", image: victor },
  { name: "ansari", image: ansari },
];

export const CrewImage = () => {
  const { crew } = useContext(PageContext);
  const currentMember = images.filter((member) => member.name === crew);
  console.log(crew);

  return <img src={currentMember[0].image} alt="" />;
};
