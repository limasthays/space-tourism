import { useContext } from "react";
import { DestinationContext } from "../contexts/DestinationContext";

export const DestinationButtons = () => {
  const { setDestination } = useContext(DestinationContext);
  return (
    <div>
      <button onClick={() => setDestination("moon")}>moon</button>
      <button onClick={() => setDestination("mars")}>mars</button>
      <button onClick={() => setDestination("europa")}>europa</button>
      <button onClick={() => setDestination("titan")}>titan</button>
    </div>
  );
};
