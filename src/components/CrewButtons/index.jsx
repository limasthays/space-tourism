import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

export const CrewButtons = () => {
  const { setCrew } = useContext(PageContext);

  return (
    <div>
      <button onClick={() => setCrew("douglas")}>douglas</button>
      <button onClick={() => setCrew("mark")}>mark</button>
      <button onClick={() => setCrew("victor")}>victor</button>
      <button onClick={() => setCrew("ansari")}>ansari</button>
    </div>
  );
};
