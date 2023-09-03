import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PhotoBox = styled("div")`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  gap: 2%;
  justify-items: center;
`;

export const ListItem = styled("div")`
  width: 80%;
`;

export const FlexCont = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
