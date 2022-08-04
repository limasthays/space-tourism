import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

export const DestinationButtons = () => {
  const { setDestination } = useContext(PageContext);
  return (
    <div>
      <button onClick={() => setDestination("moon")}>moon</button>
      <button onClick={() => setDestination("mars")}>mars</button>
      <button onClick={() => setDestination("europa")}>europa</button>
      <button onClick={() => setDestination("titan")}>titan</button>
    </div>
  );
};
