import { StyledDestinationContent } from "./style";
import data from "../../Data/data.json";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

const destinationData = data.destinations;

export const DestinationContent = () => {
  const { destination } = useContext(PageContext);

  const filtered = destinationData.filter((item) => item.name === destination);

  return (
    <StyledDestinationContent>
      {filtered.map((item) => (
        <div className="destination-content">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <hr />

          <div className="destination-info">
            <div>
              <span>avg. distance</span>
              <h4>{item.distance}</h4>
            </div>

            <div>
              <span>est. travel time</span>
              <h4>{item.travel}</h4>
            </div>
          </div>
        </div>
      ))}
    </StyledDestinationContent>
  );
};
