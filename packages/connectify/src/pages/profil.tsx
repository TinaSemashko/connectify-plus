import Imgprofil from "../images/profile1.jpg";
import Photo from "../images/photo.jpg";

import { FilterItems } from "../constants/filteritems";
import Wall from "./wall";
import Gallery from "./gallery";
import Video from "./video";
import Music from "./music";
import { useState } from "react";

import * as S from "./profil.styled";
import { Typography } from "@mui/material";

const filterItemsArray = Object.values(FilterItems);

const Profil: React.FC = () => {
  const [hiddenWall, setHiddenWall] = useState(false);
  const [hiddenGallery, setHiddenGallery] = useState(false);
  const [hiddenVideo, setHiddenVideo] = useState(false);
  const [hiddenMusic, setHiddenMusic] = useState(false);

  const filter = (item: string) => {
    switch (item) {
      case "all":
        setHiddenWall(false);
        setHiddenGallery(false);
        setHiddenVideo(false);
        setHiddenMusic(false);
        break;
      case "walls":
        setHiddenWall(false);
        setHiddenGallery(true);
        setHiddenVideo(true);
        setHiddenMusic(true);
        break;
      case "gallery":
        setHiddenGallery(false);
        setHiddenWall(true);
        setHiddenVideo(true);
        setHiddenMusic(true);
        break;
      case "video":
        setHiddenVideo(false);
        setHiddenWall(true);
        setHiddenGallery(true);
        setHiddenMusic(true);
        break;
      case "music":
        setHiddenMusic(false);
        setHiddenWall(true);
        setHiddenGallery(true);
        setHiddenVideo(true);
        break;
      default:
        setHiddenWall(false);
        setHiddenGallery(false);
        setHiddenVideo(false);
        setHiddenMusic(false);
    }
  };

  return (
    <S.MainContainer>
      <S.ContImage>
        <S.Img src={Imgprofil} alt="ImgConnection" />
        <S.ContUser>
          <S.Img1 src={Photo} alt="" />
          <Typography variant="h3" sx={{ color: "colorWhite.main" }}>
            NOM
          </Typography>
          <Typography variant="h3" sx={{ color: "colorWhite.main" }}>
            PRENOM
          </Typography>
        </S.ContUser>
      </S.ContImage>
      <S.ContContent>
        <S.Filter>
          {filterItemsArray.map((item) => (
            <S.MyButton
              key={item}
              variant="contained"
              onClick={() => filter(item)}
            >
              <Typography variant="body1" sx={{ color: "colorWhite.main" }}>
                {item}
              </Typography>
            </S.MyButton>
          ))}
        </S.Filter>
        <S.Wall>
          <Wall hidden={hiddenWall} />
          <Gallery hidden={hiddenGallery} />
          <Video hidden={hiddenVideo} />
          <Music hidden={hiddenMusic} />
        </S.Wall>
      </S.ContContent>
    </S.MainContainer>
  );
};

export default Profil;
