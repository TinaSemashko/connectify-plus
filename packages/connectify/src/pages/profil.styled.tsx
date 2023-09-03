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
  width: 100vw;

  @media (max-width: 750px) {
    height: 100%;
  }
`;

export const ContUser = styled("div")`
  grid-row: 1 / span 2;
  grid-column: 1;
  background-color: rgba(162, 159, 159, 0.7);

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 50vh;
  margin-top: 15vh;

  z-index: 10;

  @media (max-width: 1400px) {
    margin-top: 5vh;
    height: 60%;
  }

  @media (max-width: 1300px) {
    margin-top: 3vh;
  }

  @media (max-width: 1200px) {
    margin-top: 0vh;
  }

  @media (max-width: 1100px) {
    margin-top: 0vh;
    height: 50%;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    width: 80%;
    padding-top: 5vh;
    margin-top: 5vh;
    height: 80%;
    box-shadow: 0px 4px 4px black;
  }
`;

export const Imgcontainer = styled("div")`
  grid-column: 1;
  grid-row: 1 / span 2;
  /* height: 80vh; */

  @media (max-width: 750px) {
    height: 50vh;
  }
`;

export const Img1 = styled("img")`
  width: 15vw;
  border-radius: 50%;

  @media (max-width: 750px) {
    width: 30vw;
  }
`;

export const ContContent = styled("div")`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto;
  overflow-x: hidden;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
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

  @media (max-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }
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

  @media (max-width: 750px) {
    grid-column: 1;
    align-items: center;
    text-align: center;
  }
`;
