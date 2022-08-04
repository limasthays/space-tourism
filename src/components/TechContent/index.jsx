import { useContext } from "react";
import data from "../../Data/data.json";
import { PageContext } from "../contexts/PageContext";

const techData = data.technology;

export const TechContent = () => {
  const { techs } = useContext(PageContext);

  const filtered = techData.filter((item) => item.name === techs);

  return (
    <div>
      {filtered.map((item) => (
        <>
          <span>THE TERMINOLOGY</span>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </>
      ))}
    </div>
  );
};
