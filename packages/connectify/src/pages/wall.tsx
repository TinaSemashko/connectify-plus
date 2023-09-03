import Typography from "@mui/material/Typography";
import wall from "../images/wall.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { ChangeEvent, useState } from "react";
import BlockWall from "../components/blockWall/blockWall";
import Spinner from "@mui/material/CircularProgress";
import { IconButton, Input } from "@mui/material";

import * as S from "./wall.styled";

type Props = {
  hidden?: boolean;
};
const Wall: React.FC<Props> = ({ hidden = false }) => {
  const [sendmessage, setSendmessage] = useState("");
  const [componentList, setComponentList] = useState<JSX.Element[]>([]);
  const [file, setFile] = useState("");

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSendmessage(event.target?.value);
  };

  const sendMessage = (buttonImage = false) => {
    if ((sendmessage !== "" || file !== "") && !buttonImage) {
      const newComponent = <BlockWall text={sendmessage} imageUrl={file} />;
      setComponentList([...componentList, newComponent]);
      setSendmessage("");
      setFile("");
    } else return <Spinner size={120} />;
  };

  const handleUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  if (hidden) return null;

  return (
    <S.MainContainer>
      <Typography
        variant="h4"
        sx={{ py: 8 }}
        color="secondary.main"
        id="walls-text"
      >
        My Walls
      </Typography>
      <S.GridCadre>
        <S.GridTitle>Le Rap US &gt;&gt;&gt; Rap FR</S.GridTitle>
        <S.GridImg>
          <S.Img src={wall} alt="" />
          <S.TextImg>
            <Typography variant="h6">J’aime le classique...</Typography>
          </S.TextImg>
        </S.GridImg>
        {componentList.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </S.GridCadre>

      <S.GridSendBox>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "45vw",
              borderRadius: "10px",
              borderBlockColor: "grey",
              backgroundColor: "colorWhite.main",
              boxShadow: " 0px 4px 4px gray inset",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="message"
            type="text"
            sx={{
              backgroundColor: "colorWhite.main",
              boxShadow: " 0px 8px 8px #566573  inset",
            }}
            placeholder="Ecrivez votre message..."
            fullWidth
            onChange={(e) => onInputChange(e)}
          />
        </Box>

        <TextField
          variant="outlined"
          type="text"
          sx={{
            border: "none",
            "& fieldset": { border: "none" },
            width: { xs: "20vw", md: "10vw" },
            textAlign: "left",
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                component="label"
                onClick={() => sendMessage(true)}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "4rem",
                }}
              >
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
                  onChange={handleUpload}
                  name="[licenseFile]"
                />
              </IconButton>
            ),
          }}
        />

        <Button
          name="sendmessage"
          value={sendmessage}
          onClick={() => sendMessage()}
          sx={{
            color: "colorWhite.main",
            borderRadius: "50px",
            width: "1vw",
            fontSize: "4rem",
          }}
        >
          <SendRoundedIcon
            fontSize="inherit"
            className="icon"
            sx={{
              color: "white",
              backgroundColor: "primary.main",
              borderRadius: "50%",
            }}
          />
        </Button>
      </S.GridSendBox>
    </S.MainContainer>
  );
};

export default Wall;
