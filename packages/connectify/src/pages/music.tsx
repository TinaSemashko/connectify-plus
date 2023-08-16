import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import * as S from "./music.styled";
import { useEffect, useState } from "react";
import Searcher from "./searcher";
import alb1 from "../images/alb1.jpg";
import alb2 from "../images/alb2.jpg";

type Props = {
  hidden?: boolean;
};

const Music: React.FC<Props> = ({ hidden = false }) => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;

  const [token, setToken] = useState("");
  // const [musicUrl, setMusicUrl] = useState("");
  // setMusicUrl("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

  // const musicUrl = "../musics/all-the-things.mp3";

  const ArrMusic: string[] = ["RioGane -Down", "Grange - WAP"];
  const ArrMusicAlb: string[] = [alb1, alb2];
  const ArrMusicUrl: string[] = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  ];

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    // console.log(token);

    if (hash && hash) {
      if (hash) {
        const tokenParam = hash
          .substring(1)
          .split("&")
          .find((elem) => elem.startsWith("access_token"));

        if (tokenParam) {
          token = tokenParam.split("=")[1];
        }

        window.location.hash = "";
        window.localStorage.setItem("token", token ? token : "");
      }
    }

    setToken(token ? token : "");
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  if (hidden) return null;
  return (
    <S.MainContainer>
      <Typography
        variant="h4"
        fontFamily='"Gravitas One", cursive'
        sx={{
          color: "secondary.main",
          gridColumn: "1/span 2",
        }}
      >
        Music
      </Typography>
      <S.Audio>
        {ArrMusic.map((item, index) => (
          <Card sx={{ display: "flex", mb: 6 }}>
            <CardMedia
              component="img"
              sx={{ width: "20vw" }}
              image={ArrMusicAlb[index]}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "primary.main",
                width: "100%",
              }}
            >
              <CardContent
                sx={{ flex: "1 0 auto", pt: 10, color: "colorWhite.main" }}
              >
                <Typography component="div" variant="h4">
                  {item}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 10 }}
              >
                <audio controls>
                  <source src={ArrMusicUrl[index]} type="audio/mp3" />
                </audio>
              </Box>
            </Box>
          </Card>
        ))}
      </S.Audio>
      {/* <S.ContAdd>
        <Typography
          variant="h4"
          sx={{
            color: "secondary.main",
          }}
        >
          Ajouter de la musique
        </Typography>
        <br />

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "25vw",
              borderRadius: "10px",
              borderBlockColor: "colorWhite.main",
              backgroundColor: "colorWhite.main",
              boxShadow: " 0px 4px 4px gray inset",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="standard"
            label="Titre"
            type="text"
            placeholder="Insérez le titre de l'album..."
            fullWidth
          />
          <DownloadForOfflineIcon
            fontSize="inherit"
            sx={{
              color: "secondary.main",
              borderRadius: "50%",
              fontSize: "4rem",
              borderColor: "secondary.main",
            }}
          />
          <Input
            style={{ display: "none" }}
            type="file"
            hidden
            // onChange={handleUpload}
            name="[licenseFile]"
          />
          <TextField
            required
            id="standard"
            label="Album"
            type="text"
            placeholder="Insérez le link de l'album..."
            fullWidth
          />

          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => addMusic()}
            sx={{
              color: "colorWhite.main",
              borderRadius: "10px",
              width: "10vw",
              filter: " blur(0)",
              opacity: "1",
            }}
          >
            Valider
          </Button>
        </Box>
      </S.ContAdd> */}
      <h2>Searchly</h2>
      {!token ? (
        <div>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        </div>
      ) : (
        <div>
          <Searcher token={token} />
          <button className="logOut" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </S.MainContainer>
  );
};

export default Music;
