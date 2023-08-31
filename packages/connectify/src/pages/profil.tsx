import Imgprofil from "../images/profile1.jpg";
import Photo from "../images/photo.jpg";
import Cookies from "js-cookie";
import { Typography } from "@mui/material";
import { FilterItems } from "../constants/filteritems";
import Wall from "./wall";
import Gallery from "./gallery";
import Video from "./video";
import Music from "./music";
import { useState } from "react";

import * as S from "./profil.styled";

const filterItemsArray = Object.values(FilterItems);

const Profil: React.FC = () => {
  const [hiddenWall, setHiddenWall] = useState(false);
  const [hiddenGallery, setHiddenGallery] = useState(false);
  const [hiddenVideo, setHiddenVideo] = useState(false);
  const [hiddenMusic, setHiddenMusic] = useState(false);
  const userdataNom = Cookies.get("COOKIS_USER_NAME");
  const userdataPreNom = Cookies.get("COOKIS_USER_SURNAME");

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
            {userdataNom === "" ? "NOM" : userdataNom}
          </Typography>
          <Typography variant="h3" sx={{ color: "colorWhite.main" }}>
            {userdataPreNom === "" ? "PRENOM" : userdataPreNom}
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
