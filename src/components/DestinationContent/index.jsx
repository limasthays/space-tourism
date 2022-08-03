import { StyledDestinationContent } from "./style";
import data from "../../Data/data.json";

const destinationData = data.destinations;

export const DestinationContent = () => {
  console.log(destinationData);
  return (
    <StyledDestinationContent>
      {destinationData.map((dest) => {
        return (
          <>
            <h1>{dest.name}</h1>
            <img src={dest.images.png} alt={dest.name} />
            <p>{dest.description}</p>
          </>
        );
      })}
    </StyledDestinationContent>
  );
};
