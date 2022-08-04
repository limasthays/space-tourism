import { StyledFirstLine } from "./style";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

const firstLine = [
  { name: "home", number: "", content: "" },
  { name: "destination", number: "01", content: "Pick your destination" },
  { name: "crew", number: "02", content: "Meet your crew" },
  { name: "technology", number: "03", content: "SPACE LAUNCH 101" },
];

export const FirstLine = () => {
  const { page } = useContext(PageContext);
  const filteredLines = firstLine.filter((item) => item.name === page);

  return (
    <StyledFirstLine>
      {filteredLines.map((item) => (
        <h3 key={item.content}>
          <span>{item.number}</span>
          {item.content}
        </h3>
      ))}
    </StyledFirstLine>
  );
};
