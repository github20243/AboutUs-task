import { Typography,styled } from "@mui/material";
import React from "react";
import whatsappLogo from "../assets/image 4.svg";
import InstagramLogo from "../assets/image 5.svg";
import TelegramLogo from "../assets/image 6.png";


const AboutUs = () => {
	return (
		<StyledContainer>
			<StyledTyphograpyText>По Вопросам</StyledTyphograpyText>
			<StyledSocialNetworks>
				<StyledWhatsapIcon
					src={whatsappLogo}
					alt="WhatsApp"
				/>
				<StyledInstagramIcon
					src={InstagramLogo}
					alt="Instagram"
				/>
				<StyledTelegramIcon
					src={TelegramLogo}
					alt="Telegram"
				/>
			</StyledSocialNetworks>
			<StyledLoremTextBox>
				<StyledLoremText>
					Lorem Ipsum is simply dummy text of the printing and <br />{" "}
					typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
					standard dummy text ever since the 1500s, when an unknown <br />{" "}
					printer took a galley of type and scrambled it to make a type <br />{" "}
					specimen book. It has survived not only five centuries, but also{" "}
					<br /> the leap into electronic typesetting, remaining essentially{" "}
					<br /> unchanged. It was popularised in the 1960s with the release
					of <br /> Letraset sheets containing Lorem Ipsum passages, and more{" "}
					<br /> recently with desktop publishing software like Aldus
					PageMaker <br /> including versions of Lorem Ipsum.
				</StyledLoremText>
			</StyledLoremTextBox>
		</StyledContainer>
	);
};

export default AboutUs;


const StyledContainer = styled(Typography)(({ theme }) => ({
  width: "787px",
  height: "681px",
  display: "flex",
  flexDirection: "column",
  margin: "20px auto",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "270px",
  height: "706px",
  }
}))

const StyledTyphograpyText = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    fontWeight: "600",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontFamily: "sans-serif",
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "19.5px",
    }
}))


const StyledSocialNetworks = styled("div")(({theme}) => ({
  width: "468px",
  height: "102px",
  display: "flex",
  justifyContent: "space-between", // Центрирование иконок по горизонтали
  alignItems: "center", // Центрирование иконок по вертикали
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "211px",
  height: "46px",
  }
}));

const StyledWhatsapIcon = styled("img")(({theme}) => ({
  width: "102px",
  height: "102px",
  [theme.breakpoints.down("sm")]: {
    width: "46px",
  height: "46px",
  }
}));

const StyledInstagramIcon = styled("img")(({theme}) => ({
  width: "102px",
  height: "102px",
  [theme.breakpoints.down("sm")]: {
    width: "46px",
  height: "46px",
  }
}));

const StyledTelegramIcon = styled("img")(({theme}) => ({
  width: "102px",
  height: "102px",
  [theme.breakpoints.down("sm")]: {
    width: "46px",
  height: "46px",
  }
}));

const StyledLoremTextBox = styled("div")(({theme}) => ({
  width: "787px",
  height: "470px",
  display: "flex",
  justifyContent: "center", // Центрирование текста по горизонтали
  alignItems: "center" ,// Центрирование текста по вертикали
  [theme.breakpoints.down("sm")]: {
    width: "317px",
  height: "378px",
  }
}));

const StyledLoremText = styled("p")(({theme}) => ({
  fontFamily: "sans-serif",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "46.56px",
  textAlign: "center",
  maxWidth: "100%", // Чтобы текст не выходил за пределы контейнера
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  fontWeight: "400",
  }
}));
