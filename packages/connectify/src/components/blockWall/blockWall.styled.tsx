import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  background-color: ${({ theme }) => theme.palette.colorWhite.main};
  padding: 4vh;
  width: 50vw;

  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  margin-bottom: 4vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Img = styled("img")`
  grid-column: 1;
  grid-row: 1 / span 2;
  width: 38vw;
  text-align: center;
`;

export const Text = styled("div")`
  grid-column: 1;
  grid-row: 1 / span 2;
  padding-top: 1vh;
`;
