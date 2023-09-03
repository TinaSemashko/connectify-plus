import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  padding-bottom: 4rem;
  text-align: center;
`;
export const GridCadre = styled("div")`
  width: 90%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4vh;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const GridImg = styled("div")`
  background-color: ${({ theme }) => theme.palette.colorWhite.main};
  padding: 4vh;
  width: 70%;
  height: 50vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;

  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  margin-bottom: 4vh;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const Img = styled("img")`
  width: 80%;
  /* height: 100vh; */
  font-family: "Alkatra", cursive;
  grid-column: 1;
  grid-row: 1;
`;

export const TextImg = styled("div")`
  grid-column: 1;
  grid-row: 2;
`;

export const GridTitle = styled("div")`
  width: 70%;
  height: 10vh;
  padding-top: 1rem;
  border-radius: 16px;
  box-shadow: 0px 4px 4px grey;
  font-family: "Alkatra", cursive;
  background-color: ${({ theme }) => theme.palette.colorWhite.main};
  text-align: center;
  margin-bottom: 4vh;
`;

export const GridSendBox = styled("div")`
  width: 90%;
  height: 15vh;
  font-family: "Alkatra", cursive;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: space-evenly;
  align-items: start;

  .icon {
    transform: rotate(-40deg);
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;
