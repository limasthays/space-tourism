import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

export const TechButtons = () => {
  const { setTechs } = useContext(PageContext);
  return (
    <div>
      <button onClick={() => setTechs("Launch vehicle")}>1</button>
      <button onClick={() => setTechs("Spaceport")}>2</button>
      <button onClick={() => setTechs("Space capsule")}>3</button>
    </div>
  );
};
