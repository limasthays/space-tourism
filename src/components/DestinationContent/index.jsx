import { StyledDestinationContent } from "./style";
import data from "../../Data/data.json";
import { useContext } from "react";
import { DestinationContext } from "../contexts/DestinationContext";

const destinationData = data.destinations;

export const DestinationContent = () => {
  const { destination } = useContext(DestinationContext);

  const filtered = destinationData.filter((item) => item.name === destination);
  console.log(filtered);

  return (
    <StyledDestinationContent>
      {filtered.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <span>avg. distance</span>
          <h4>{item.distance}</h4>
          <span>est. travel time</span>
          <h4>{item.travel}</h4>
        </div>
      ))}
    </StyledDestinationContent>
  );
};
