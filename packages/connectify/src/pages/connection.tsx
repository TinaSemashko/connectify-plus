import ImgConnection from "../images/connection.jpg";
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
import { useEffect, useState } from "react";
import { Routes } from "./../app/routes";
import { useNavigate } from "react-router";
import { Validate, ValidationGroup } from "mui-validate";

import * as S from "./connection.styled";
import axios from "axios";

const Connection: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [userdata, setUserdata] = useState("");
  // const [user, setUser] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = user;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const Connect = () => {
    fetchGet();
    if (validationEmail.valid) {
      console.log("Vous vous êtes connecté avec succès");
      navigate(Routes.profil);
      //modal fenetre
    } else console.log("Corrigez les erreurs dans le formulaire");
  };

  const fetchGet = async () => {
    await axios
      .get(`users`)
      .then((response) => setUserdata(response.data))
      .catch((err) => console.error(err));

    console.log("userdata " + userdata);
  };

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
                      width: "25vw",
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
                      placeholder="Entrez votre mot de passe..."
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
                      width: "10vw",
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
