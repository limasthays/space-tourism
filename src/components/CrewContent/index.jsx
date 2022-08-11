import { useContext } from "react";
import data from "../../Data/data.json";
import { PageContext } from "../contexts/PageContext";
import { StyledCrewContent } from "./style";

const crewData = data.crew;
export const CrewContent = () => {
  const { crew } = useContext(PageContext);
  const filtered = crewData.filter((item) => item.name === crew);

  return (
    <StyledCrewContent>
      {filtered.map((item) => (
        <div className="crew--content">
          <div>
            <h3 key={item.role}>{item.role}</h3>
            <h2 key={item.name}>{item.name}</h2>
          </div>
          <p key={item.bio}>{item.bio}</p>
        </div>
      ))}
    </StyledCrewContent>
  );
};
