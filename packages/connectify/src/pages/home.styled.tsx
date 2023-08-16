import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  /* height: calc(100vh - 20vh); */
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-rows: auto;
  justify-items: center;
`;

export const Cell12 = styled("div")`
  grid-column: 1 / span 2;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;

  video {
    width: 100%;
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .text12 {
    grid-column: 1;
    grid-row: 1 / span 2;
    color: ${({ theme }) => theme.palette.secondary.main};
    z-index: 10;
  }

  .text22 {
    grid-column: 1;
    grid-row: 1 / span 2;
    color: ${({ theme }) => theme.palette.secondGreen.main};
    z-index: 10;
  }

  .video22 {
    opacity: 0.5;
  }

  .videoblur {
    filter: blur(2px);
  }
`;

export const FormInscr = styled("div")`
  grid-column: 1;
  grid-row: 1 / span 2;
  background-color: ${({ theme }) => theme.palette.colorShadow.main};
  opacity: 0.74;
  text-align: center;
  border-radius: 20px;
  padding: 4vh;
`;

export const Cell31 = styled("div")`
  grid-column: 1;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Cell32 = styled("div")`
  grid-column: 2;
  height: 100vh;
`;

export const Img = styled("img")`
  width: 50vw;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
`;

export const Texts = styled("div")`
  width: 50vw;
  min-height: 100vh;
  text-align: center;
  padding-left: 8vw;
  padding-right: 8vw;
  line-height: 4;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const BoxContactForm = styled("div")`
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const TextFieldContainer = styled("div")`
  display: flex;
  justify-content: "center";
`;
