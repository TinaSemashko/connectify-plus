import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Audio = styled("div")`
  width: 75vw;
  text-align: center;
  padding-left: 2vw;
  padding-top: 10vh;
`;

export const ContAdd = styled("div")`
  text-align: center;
`;

export const CardCont = styled(Card)`
  display: flex;
  margin-bottom: 6vh;

  @media (max-width: 750px) {
    display: block;
    text-align: center;
  }
`;
