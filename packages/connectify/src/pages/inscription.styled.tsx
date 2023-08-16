import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Img = styled("img")`
  width: 80vw;
  height: calc(100vh - 10vh);
`;

export const Col2 = styled("div")`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.lightGreen.main};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4vh;
`;

export const ContForm = styled("div")`
  width: 60%;
  background-color: ${({ theme }) => theme.palette.secondGreen.main};
  text-align: center;
  border-radius: 5%;
`;

export const BoxForm = styled("div")`
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RadioButton = styled("div")`
  color: ${({ theme }) => theme.palette.colorWhite.main};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
