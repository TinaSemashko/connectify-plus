import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { Validate, ValidationGroup } from "mui-validate";
import axios from "../axios";
import ImgContact from "../images/contact.jpg";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import FormContact from "../components/formContact/formContact";
import fdaccueil from "../movie/fdaccueil.mp4";

import * as S from "./home.styled";

const translations = {
  fr: "Bienvenue",
  en: "Welcome",
  es: "Bienvenido",
  de: "Willkommen",
  uk: "Ласкаво просимо",
};

const Home: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const [userAbonnement, setUserAbonnement] = useState("");
  const [userId, setUserId] = useState(0);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserAbonnement(event.target?.value);
  };

  const showError = (err: Error) => {
    enqueueSnackbar("Il n'y a pas d'utilisateur avec un tel email", {
      variant: "error",
    });
    console.error(err);
  };

  const fetchPut = async () => {
    const requestData = {
      email: userAbonnement,
    };

    await axios
      .put(`abonnement`, requestData)
      .then((response) => {
        setUserId(response.data.results);
      })
      .catch((err) => {
        showError(err);
      });
  };

  const addAbonement = () => {
    if (validationEmail.valid) {
      fetchPut();
    } else
      enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
        variant: "error",
      });
  };

  useEffect(() => {
    console.log(userId);
    if (userId) {
      enqueueSnackbar("Vous avez abonné avec succès", {
        variant: "success",
      });
    }
  }, [userId]);

  useEffect(() => {
    const changeLanguage = () => {
      const welcomeText = document.getElementById("welcome-text");
      const currentLanguage = welcomeText?.getAttribute("data-lang");
      const languages = Object.keys(translations);
      let nextIndex =
        (languages.indexOf(
          currentLanguage === null || currentLanguage === undefined
            ? ""
            : currentLanguage
        ) +
          1) %
        languages.length;
      const nextLanguage = languages[nextIndex].toString();

      if (welcomeText)
        welcomeText.innerHTML =
          translations[nextLanguage as keyof typeof translations];
      welcomeText?.setAttribute("data-lang", nextLanguage);
    };

    const intervalId = setInterval(changeLanguage, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <S.MainContainer>
      <S.Cell12>
        <video src={fdaccueil} autoPlay loop muted />
        <Typography variant="h1" className="text12" sx={{ opacity: 0.8 }}>
          Connectify
        </Typography>
      </S.Cell12>
      <S.Cell12
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <video src={fdaccueil} muted className="video22" />
        <div className="text22">
          <Typography
            variant="h2"
            color="secondGreen.main"
            id="welcome-text"
            fontFamily="'Yeseva One', cursive"
          >
            Bienvenue
          </Typography>
          <Typography variant="h6" color="colorWhite.main" textAlign="center">
            "Harmonisez vos passions, partagez vos émotions avec Connectify !"
          </Typography>
        </div>
      </S.Cell12>
      <S.Cell31>
        <S.Img src={Img1} alt="Img1" />
      </S.Cell31>
      <S.Cell32 sx={{ backgroundColor: "lightGreen.main" }}>
        <S.Texts>
          <Typography variant="h5" sx={{ pt: 8 }}>
            Actualité
          </Typography>
          <br />
          <br />
          <Typography variant="h6" sx={{ color: "colorWhite.main" }}>
            Le lieu où vous pouvez vous connecter avec vos amis, partager des
            moments spéciaux et explorer de nouvelles rencontres.
          </Typography>
          <Typography variant="h6" sx={{ color: "colorWhite.main" }}>
            Exprimez-vous à travers des photos, des vidéos et des messages, et
            découvrez le monde passionnant de la communauté Connectify.
          </Typography>
          <Typography variant="h6" sx={{ color: "colorWhite.main" }}>
            Rejoignez-nous dès maintenant et commencez à créer des liens, à
            inspirer et à être inspiré. Connectify est là pour vous aider à
            rester connecté et à célébrer les moments de la vie, ensemble.
          </Typography>
        </S.Texts>
      </S.Cell32>
      <S.Cell31 sx={{ backgroundColor: "secondGreen.main" }}>
        <S.Texts>
          <Typography variant="h5" sx={{ pt: 8 }}>
            Qui sommes nous ?
          </Typography>
          <br />
          <Typography variant="h6" sx={{ color: "colorWhite.main" }}>
            Chez Connectify, nous sommes une plateforme sociale dynamique et
            inclusive, dédiée à connecter les individus du monde entier.
          </Typography>
          <Typography variant="h6" sx={{ color: "colorWhite.main" }}>
            Notre objectif est de créer un espace numérique où chacun peut se
            sentir libre d'exprimer sa véritable identité, de partager ses
            passions et de tisser des liens authentiques.
          </Typography>
        </S.Texts>
      </S.Cell31>
      <S.Cell32>
        <S.Img src={Img2} alt="Img2" />
      </S.Cell32>
      <S.Cell31>
        <S.Img src={ImgContact} alt="ImgConnection" />
      </S.Cell31>
      <S.Cell32 sx={{ backgroundColor: "lightGreen.main" }}>
        <S.Texts>
          <S.BoxContactForm>
            <FormContact widthSpace={true} />
          </S.BoxContactForm>
        </S.Texts>
      </S.Cell32>
      <S.Cell12>
        <video src={fdaccueil} muted className="videoblur" />
        <S.FormInscr>
          <Typography
            variant="h4"
            sx={{
              color: "secondary.main",
            }}
          >
            Newsletter
          </Typography>
          <br />
          <Typography
            variant="body2"
            sx={{
              color: "colorWhite.main",
            }}
          >
            Inscrivez-vous à notre newsletter pour rester informé(e) et
            connecté(e) avec Connectify !
          </Typography>
          <br />
          <ValidationGroup>
            <>
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
                <Validate
                  name="email"
                  regex={[
                    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Votre email n'est pas valide",
                  ]}
                  after={(result: any) => setValidationEmail(result)}
                >
                  <S.TextFieldContainer>
                    <TextField
                      required
                      id="standard"
                      type="text"
                      placeholder="Entrez votre email..."
                      fullWidth
                      name="email"
                      value={userAbonnement}
                      onChange={(e) => onInputChange(e)}
                    />
                  </S.TextFieldContainer>
                </Validate>

                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addAbonement()}
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
            </>
          </ValidationGroup>
        </S.FormInscr>
      </S.Cell12>
    </S.MainContainer>
  );
};

export default Home;
