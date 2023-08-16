import ImgContact from "../images/contact.jpg";
import FormContact from "../components/formContact/formContact";

import * as S from "./contact.styled";

const Contact: React.FC = () => {
  return (
    <S.MainContainer>
      <S.Img src={ImgContact} alt="contact" />
      <FormContact widthSpace={false} />
    </S.MainContainer>
  );
};

export default Contact;
