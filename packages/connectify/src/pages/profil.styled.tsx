import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ContImage = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

export const Img = styled("img")`
  grid-row: 1 / span 2;

  grid-column: 1;
  width: 100vw;
`;

export const ContUser = styled("div")`
  grid-row: 1 / span 2;
  grid-column: 1;
  background-color: rgba(162, 159, 159, 0.7);

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 50%;

  z-index: 10;
`;

export const Img1 = styled("img")`
  width: 15vw;
  border-radius: 50%;
`;

export const ContContent = styled("div")`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto;
  overflow-x: hidden;
`;

export const Filter = styled("div")`
  grid-column: 1;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 10vh;

  position: -webkit-sticky;
  position: sticky;
  align-self: start;
  top: 1rem;
  left: 1rem;
`;

export const MyButton = styled(Button)`
  width: 8vw;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 3%;
  padding-bottom: 3%;

  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Wall = styled("div")`
  grid-column: 2;
  height: 100vh;
`;
