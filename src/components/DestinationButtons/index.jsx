import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";
import { StyledDestButtons } from "./style";

export const DestinationButtons = () => {
  const { setDestination } = useContext(PageContext);
  return (
    <StyledDestButtons>
      <button onClick={() => setDestination("moon")}>moon</button>
      <button onClick={() => setDestination("mars")}>mars</button>
      <button onClick={() => setDestination("europa")}>europa</button>
      <button onClick={() => setDestination("titan")}>titan</button>
    </StyledDestButtons>
  );
};
