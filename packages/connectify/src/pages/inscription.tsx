import ImgInscription from "../images/inscription.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "../axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import { Validate, ValidationGroup } from "mui-validate";
import { useNavigate } from "react-router";
import { Routes } from "../app/routes";

import * as S from "./inscription.styled";

const Inscription: React.FC = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const [password2, setPassword2] = useState<string>("");
  const [isPasswordTrue, setIsPasswordTrue] = useState(false);
  const [validationNom, setValidationNom] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [validationPreNom, setValidationPreNom] = useState({
    valid: false,
    messages: [],
    display: false,
  });
  const [validationEmail, setValidationEmail] = useState({
    valid: false,
    messages: [],
    display: false,
  });

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    email: "",
    genre: "",
    password: "",
    abonnement: false,
  });

  const { nom, prenom, email, genre, password, abonnement } = user;
  const [newUserId, setNewUserId] = useState(0);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [event.target?.name]: event.target?.value });
    console.log(user);
  };

  const onInputChangePass2 = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword2(event.target?.value);
    console.log(password2);
  };

  const showError = (err: Error) => {
    enqueueSnackbar("Quelque shose ne va pas", { variant: "error" });
    console.error(err);
  };

  const fetchPost = async () => {
    const request = {
      data: user,
    };
    await axios
      .post(`create`, request)
      .then((response) => setNewUserId(response.data.results))
      .catch((err) => {
        showError(err);
      });
  };

  useEffect(() => {
    if (password2 === user.password) setIsPasswordTrue(true);
    else setIsPasswordTrue(false);
    console.log("isPasswordTrue " + isPasswordTrue);
  }, [password2]);

  const addUser = async () => {
    if (isPasswordTrue) {
      if (
        validationNom.valid &&
        validationPreNom.valid &&
        validationEmail.valid
      ) {
        fetchPost();
      } else
        enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
          variant: "error",
        });
    } else
      enqueueSnackbar("Passwords ne corresponds pas", {
        variant: "error",
      });
  };

  const Redirect = useCallback(() => {
    enqueueSnackbar("L'utilisateur est créé avec succès", {
      variant: "success",
    });
    navigate(Routes.connection);
  }, [navigate]);

  useEffect(() => {
    if (newUserId) Redirect();
  }, [newUserId, Redirect]);

  return (
    <S.MainContainer>
      <S.Img src={ImgInscription} alt="inscription" />
      <S.Col2>
        <br />
        <br />
        <ValidationGroup>
          <>
            <Typography
              variant="h4"
              sx={{
                color: "secondary.main",
              }}
            >
              Inscription
            </Typography>
            <S.ContForm>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    borderRadius: "10px",
                    borderBlockColor: "colorWhite.main",
                    backgroundColor: "colorWhite.main",
                    boxShadow: " 0px 4px 4px gray inset",
                    display: "flex",
                    flexWrap: "no-wrap",
                    alignItems: "center",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <S.BoxForm>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "start",
                    }}
                  >
                    <Typography
                      noWrap
                      variant="body1"
                      color="colorWhite.main"
                      textAlign="left"
                      paddingRight="9rem"
                    >
                      Nom :
                    </Typography>

                    <Typography
                      noWrap
                      variant="body1"
                      color="colorWhite.main"
                      textAlign="left"
                      paddingRight="7rem"
                    >
                      Prénom :
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Validate
                      name="nom"
                      regex={[
                        /[a-zA-Z]+/g,
                        "Vous pouvez juste mettre des lettres",
                      ]}
                      after={(result: any) => setValidationNom(result)}
                    >
                      <TextField
                        required
                        id="standard"
                        type="text"
                        placeholder="Entrez votre nom..."
                        sx={{
                          width: "12vw",
                        }}
                        name="nom"
                        value={nom}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Validate>
                    <Validate
                      name="prenom"
                      regex={[
                        /[a-zA-Z]+/g,
                        "Vous pouvez juste mettre des lettres",
                      ]}
                      after={(result: any) => setValidationPreNom(result)}
                    >
                      <TextField
                        required
                        id="standard"
                        type="text"
                        placeholder="Entrez votre prénom.."
                        sx={{
                          width: "12vw",
                        }}
                        name="prenom"
                        value={prenom}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Validate>
                  </Box>

                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingRight="20rem"
                  >
                    Email :
                  </Typography>
                  <div>
                    <Validate
                      name="email"
                      regex={[
                        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        "Votre email n'est pas valide",
                      ]}
                      after={(result: any) => setValidationEmail(result)}
                    >
                      <TextField
                        required
                        id="standard"
                        type="text"
                        placeholder="Entrez votre email..."
                        fullWidth
                        sx={{
                          width: "25vw",
                        }}
                        name="email"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Validate>
                  </div>
                  <FormControl>
                    <S.RadioButton>
                      <div>Genre&nbsp;&nbsp;</div>
                      <RadioGroup
                        row
                        aria-labelledby="radio-buttons"
                        name="genre"
                        value={genre}
                        onChange={(e) => onInputChange(e)}
                        sx={{
                          color: "colorWhite.main",
                          "&.Mui-checked": {
                            color: "colorWhite.main",
                          },
                        }}
                      >
                        <FormControlLabel
                          value="femme"
                          control={
                            <Radio
                              sx={{
                                color: "colorWhite.main",
                                "&.Mui-checked": {
                                  color: "colorWhite.main",
                                },
                              }}
                            />
                          }
                          label="Femme"
                        />
                        <FormControlLabel
                          value="homme"
                          control={
                            <Radio
                              sx={{
                                "&, &.Mui-checked": {
                                  color: "colorWhite.main",
                                },
                              }}
                            />
                          }
                          label="Homme"
                        />
                        <FormControlLabel
                          value="other"
                          control={
                            <Radio
                              sx={{
                                "&, &.Mui-checked": {
                                  color: "colorWhite.main",
                                },
                              }}
                            />
                          }
                          label="Other"
                        />
                      </RadioGroup>
                    </S.RadioButton>
                  </FormControl>
                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingRight="16rem"
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
                      name="password"
                      value={password}
                      onChange={(e) => onInputChange(e)}
                      autoComplete="off"
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
                  <Typography
                    variant="body1"
                    color="colorWhite.main"
                    textAlign="left"
                    paddingRight="9rem"
                  >
                    Vérification de mot de passe :
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
                      id="filled-adornment-password2"
                      type={showPassword2 ? "text" : "password"}
                      placeholder="Vérification de mot de passe :"
                      name="password2"
                      value={password2}
                      onChange={(e) => onInputChangePass2(e)}
                      autoComplete="off"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <br />
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => addUser()}
                    sx={{
                      color: "colorWhite.main",
                      borderRadius: "10px",
                      width: "10vw",
                    }}
                  >
                    Valider
                  </Button>
                </S.BoxForm>
              </Box>
            </S.ContForm>
          </>
        </ValidationGroup>
      </S.Col2>
    </S.MainContainer>
  );
};

export default Inscription;
