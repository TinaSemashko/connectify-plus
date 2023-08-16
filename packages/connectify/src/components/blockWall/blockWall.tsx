import { Typography } from "@mui/material";
import * as S from "./blockWall.styled";

type Props = {
  text?: string;
  imageUrl?: string;
};

const blockWall: React.FC<Props> = ({ text = "", imageUrl = "" }) => {
  return (
    <S.MainContainer>
      <S.Img src={imageUrl} />
      <S.Text>
        <Typography variant="h6"> {text}</Typography>
      </S.Text>
    </S.MainContainer>
  );
};

export default blockWall;
