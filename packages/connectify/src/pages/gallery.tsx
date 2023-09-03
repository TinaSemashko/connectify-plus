import { Button, TextField, Typography } from "@mui/material";

import axios from "axios";
import { useState } from "react";
import * as S from "./gallery.styled";
// import { PEXEL_API_KEY } from "../constants";

// interface PhotoObject {
//   id: string;
//   width: number;
//   height: number;
//   url: string;
//   photographer: string;
//   photographer_url: string;
//   photographer_id: number;
//   avg_color: string;
//   src: {
//     original: string;
//     large2x: string;
//     large: string;
//     medium: string;
//     small: string;
//     portrait: string;
//     landscape: string;
//     tiny: string;
//   };
//   liked: boolean;
//   alt: string;
// }

interface PhotoObject {
  id: string;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;

  src: {
    landscape: string;
    original: string;
    portrait: string;
  };
}

type Props = {
  hidden?: boolean;
};

// const photosId = ["17907200", "17907159", "17907128", "17907148"];

const Gallery: React.FC<Props> = ({ hidden = false }) => {
  const [photos, setPhotos] = useState<PhotoObject[]>([]);
  const [searching, setSearching] = useState("");

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setSearching(event.target.value);
  };

  const showPhotos = () => {
    fetchGet();
  };

  const handlePexelsResponse = (response: PhotoObject[]) => {
    setPhotos(response);
  };
  const sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searching}&key=o74bf7260e2353cb3165aa02a0b5btfd`;

  const increasePhoto = (index: number) => {
    const pictures = document.querySelectorAll(`#pict`);
    const pictArray = Array.from(pictures);
    const picture = document.querySelector(`.item${index}`) as HTMLElement;
    pictArray.forEach((item, index) => {
      (item as HTMLElement)!.style.zIndex = "1";
      (item as HTMLElement)!.style.position = "relative";
      if (item !== picture) (item as HTMLElement)!.style.filter = "blur(4px)";
    });

    const animation = picture?.animate([{ transform: "scale(2.5)" }], 1000);
    picture!.style.zIndex = "10000";
    animation?.addEventListener("finish", () => {
      picture!.style.zIndex = "10000";
      picture!.style.transform = "scale(2.5)";
    });
  };

  const reducePhoto = (index: number) => {
    const picture = document.querySelector(`.item${index}`) as HTMLElement;
    var animation = picture?.animate([{ transform: "scale(1)" }], 1000);
    animation?.addEventListener("finish", () => {
      picture!.style.zIndex = "1";
      picture!.style.transform = "scale(1)";
    });
    const pictures = document.querySelectorAll(`#pict`);
    const pictArray = Array.from(pictures);

    pictArray.forEach((item) => {
      if (item !== picture) (item as HTMLElement)!.style.filter = "blur(0px)";
    });
  };

  // let pexelsApiUrl = "";
  // // photosId.map((id) => {
  // const id = "17907200";
  // pexelsApiUrl = `https://api.pexels.com/v1/photos/${id}`;
  // let headers = {
  //   Authorization: `Bearer ${PEXEL_API_KEY}`,
  //   "Cache-Control": "no-cache",
  //   "Content-Type": "application/x-www-form-urlencoded",
  //   "Access-Control-Allow-Origin": "http://localhost:3000",
  //   "Access-Control-Allow-Headers":
  //     "Origin, X-Requested-With, Content-Type, Accept, **Authorization**",
  //   "Access-Control-Allow-Credentials": "true",
  //   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  // };
  // axios
  //   .get(pexelsApiUrl, { headers: headers })
  //   .then((response) => handlePexelsResponse(response));
  // });

  const fetchGet = async () => {
    await axios
      .get(sheCodesApiUrl)
      .then((response) => handlePexelsResponse(response.data.photos))
      .catch((err) => console.error(err));
  };

  if (hidden) return null;
  return (
    <S.MainContainer>
      <Typography
        variant="h4"
        sx={{
          color: "secondary.main",
          gridColumn: "1/span 2",
          textAlign: "center",
          pb: 5,
        }}
      >
        Gallery
      </Typography>
      <S.FlexCont>
        <TextField
          id="standard"
          type="text"
          placeholder="Cherchez..."
          name="searching"
          value={searching}
          onChange={(e) => onInputChange(e)}
          fullWidth
          sx={{
            width: { xs: "50vw", md: "25vw" },
            textAlign: "center",
            gridColumn: "1/span 2",
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => showPhotos()}
          sx={{
            color: "colorWhite.main",
            borderRadius: "10px",
            width: "4vw",
            my: "1vw",
          }}
        >
          Applay
        </Button>

        <S.PhotoBox>
          {photos?.map((photo, index) => (
            <S.ListItem key={photo.id}>
              <img
                src={photo.src.landscape}
                alt={photo.photographer}
                width="100%"
                height="100%"
                className={`item${index}`}
                id="pict"
                onMouseOver={() => increasePhoto(index)}
                onMouseLeave={() => reducePhoto(index)}
              />
            </S.ListItem>
          ))}
        </S.PhotoBox>
      </S.FlexCont>
    </S.MainContainer>
  );
};

export default Gallery;
