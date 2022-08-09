import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";
import oval from "../../assets/shared/Oval.svg";
import { StyledCrewButtons } from "./style";

export const CrewButtons = () => {
  const { setCrew } = useContext(PageContext);

  return (
    <StyledCrewButtons>
      <button>
        <img src={oval} onClick={() => setCrew("Douglas Hurley")} alt="" />
      </button>

      <button>
        <img src={oval} onClick={() => setCrew("Mark Shuttleworth")} alt="" />
      </button>
      <button>
        <img src={oval} onClick={() => setCrew("Victor Glover")} alt="" />
      </button>
      <button>
        <img src={oval} onClick={() => setCrew("Anousheh Ansari")} alt="" />
      </button>
    </StyledCrewButtons>
  );
};
