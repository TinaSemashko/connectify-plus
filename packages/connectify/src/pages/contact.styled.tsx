import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Img = styled("img")`
  width: 80vw;
  height: calc(100vh - 10vh);

  @media (max-width: 750px) {
    width: 100vw;
  }
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

export const ContForm = styled("div")<{ widthSpace: boolean }>`
  width: ${({ widthSpace }) => (widthSpace ? "70vh" : "55%")};
  background-color: ${({ theme }) => theme.palette.secondGreen.main};
  text-align: center;
  border-radius: 5%;

  @media (max-width: 750px) {
    width: 80vw;
  }
`;

export const BoxForm = styled("div")`
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
