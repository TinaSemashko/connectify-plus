import { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "../axios";
import { useNavigate } from "react-router";
import { Validate, ValidationGroup } from "mui-validate";
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { Routes } from "./../app/routes";
import ImgConnection from "../images/connection.jpg";

import * as S from "./connection.styled";

interface User {
  id: number;
  nom: string;
  prenom: string;
  genre: string;
  email: string;
  password: string;
  abonnement: boolean;
}

Cookies.set("COOKIS_USER_NAME", "Nom");
Cookies.set("COOKIS_USER_SURNAME", "Prenom");

const Connection: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [userdata, setUserdata] = useState<User>();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({
      ...user,
      [event.target?.name]: event.target?.value,
    });
  };

  const Connect = () => {
    if (validationEmail.valid) {
      fetchGet();
    } else
      enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
        variant: "error",
      });
  };

  const Redirect = useCallback(() => {
    enqueueSnackbar("Vous êtes connecté avec succès", {
      variant: "success",
    });
    navigate(Routes.profil);
  }, [navigate]);

  const showError = (err: Error) => {
    enqueueSnackbar(
      "Il n'y a pas d'utilisateur avec un tel login et mot de passe",
      { variant: "error" }
    );
    console.error(err);
  };

  const fetchGet = async () => {
    const request = {
      params: {
        email: user.email,
        password: user.password,
      },
    };
    await axios
      .get(`user`, request)
      .then((response) => {
        setUserdata(response.data.results[0] as User);
      })
      .catch((err) => {
        showError(err);
      });
  };

  useEffect(() => {
    if (userdata) {
      const userdataNom = userdata === undefined ? "" : userdata.nom;
      const userdataPreNom = userdata === undefined ? "" : userdata.prenom;
      Cookies.set("COOKIS_USER_NAME", userdataNom);
      Cookies.set("COOKIS_USER_SURNAME", userdataPreNom);
      Redirect();
    }
  }, [userdata, Redirect]);

  return (
    <S.MainContainer>
      <S.Img src={ImgConnection} alt="connection" />
      <S.Col2>
        <ValidationGroup>
          <>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
              }}
            >
              Connection
            </Typography>
            <S.ContForm>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: { xs: "50vw", md: "25vw" },
                    borderRadius: "10px",
                    borderBlockColor: "colorWhite.main",
                    backgroundColor: "colorWhite.main",
                    boxShadow: " 0px 4px 4px gray inset",
                  },
                }}
                noValidate
                autoComplete={"off"}
              >
                <S.BoxForm>
                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingLeft="1.5rem"
                  >
                    Email :
                  </Typography>

                  <Validate
                    name="email"
                    regex={[
                      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      "Votre email n'est pas valide",
                    ]}
                    after={(result: any) => setValidationEmail(result)}
                  >
                    <S.ContainerEmail>
                      <TextField
                        required
                        id="standard"
                        type="text"
                        placeholder="Entrez votre email..."
                        fullWidth
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                      />
                    </S.ContainerEmail>
                  </Validate>

                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingLeft="1.5rem"
                  >
                    Mot de passe :
                  </Typography>
                  <FormControl
                    sx={{
                      m: 1,
                      width: { xs: "50vw", md: "25vw" },
                      borderRadius: "10px",
                      borderBlockColor: "colorWhite.main",
                      backgroundColor: "colorWhite.main",
                      boxShadow: " 0px 4px 4px gray inset",
                    }}
                    variant="standard"
                  >
                    <FilledInput
                      id="filled-adornment-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Entrez votre mot de passe..."
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>

                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => Connect()}
                    sx={{
                      color: "colorWhite.main",
                      borderRadius: "10px",
                      width: { xs: "30vw", md: "15vw" },
                    }}
                  >
                    Se Connecter
                  </Button>
                  <br />
                  <br />
                  <Typography
                    variant="body1"
                    sx={{
                      color: "colorWhite.main",
                    }}
                  >
                    Pas de compte ?&nbsp;
                    <span
                      className="lien-inscr"
                      onClick={() => navigate(Routes.inscription)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Inscrivez-vous
                    </span>
                  </Typography>
                </S.BoxForm>
              </Box>
            </S.ContForm>
          </>
        </ValidationGroup>
      </S.Col2>
    </S.MainContainer>
  );
};

export default Connection;
