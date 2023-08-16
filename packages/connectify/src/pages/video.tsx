import { Typography } from "@mui/material";
import pexels from "../movie/pexels.mp4";

import * as S from "./video.styled";

type Props = {
  hidden?: boolean;
};

const Video: React.FC<Props> = ({ hidden = false }) => {
  if (hidden) return null;
  return (
    <S.MainContainer>
      <Typography
        variant="h4"
        sx={{ color: "secondary.main", gridColumn: "1/span 2" }}
      >
        Video
      </Typography>
      <video src={pexels} muted autoPlay loop />
    </S.MainContainer>
  );
};

export default Video;
