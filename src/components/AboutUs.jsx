import { Typography, styled } from "@mui/material";
import React from "react";
import whatsappLogo from "../assets/image 4.svg";
import InstagramLogo from "../assets/image 5.svg";
import TelegramLogo from "../assets/image 6.png";

const AboutUs = () => {
	return (
		<StyledContainer>
			<StyledTyphograpyText>По Вопросам</StyledTyphograpyText>
			<StyledSocialNetworks>
				<StyledIcon src={whatsappLogo} alt="WhatsApp" />
				<StyledIcon src={InstagramLogo} alt="Instagram" />
				<StyledIcon src={TelegramLogo} alt="Telegram" />
			</StyledSocialNetworks>
			<StyledLoremTextBox>
				<StyledLoremText>
					Lorem Ipsum is simply dummy text of the printing and <br />{" "}
					typesetting industry. Lorem <br /> Ipsum has been the industry's <br />
					standard <br /> dummy text ever since the 1500s, when an unknown <br />
					printer took a galley of type and scrambled it to make a type <br /> specimen
					book. It has survived not only five centuries, but also <br /> the leap into
					electronic typesetting, remaining essentially <br /> unchanged. It was
					popularised in the 1960s with the release of <br /> Letraset sheets
					containing Lorem Ipsum passages, and more <br /> recently with desktop
					publishing software like Aldus PageMaker <br /> including versions of Lorem
					Ipsum.
				</StyledLoremText>
			</StyledLoremTextBox>
		</StyledContainer>
	);
};

export default AboutUs;

const StyledContainer = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: "787px",
	margin: "20px auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "10px 15px", // Уменьшены отступы
	boxSizing: "border-box",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "270px",
		padding: "10px 5px", // Уменьшены отступы на мобильных
	},
}));

const StyledTyphograpyText = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	fontWeight: "600",
	fontSize: "28px", // Уменьшен размер шрифта
	marginBottom: "15px", // Уменьшен отступ снизу
	[theme.breakpoints.down("sm")]: {
		fontSize: "18px", // Уменьшен размер шрифта на мобильных
	},
}));

const StyledSocialNetworks = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: "468px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "15px", // Уменьшен отступ снизу
	[theme.breakpoints.down("sm")]: {
		maxWidth: "211px",
	},
}));

const StyledIcon = styled("img")(({ theme }) => ({
	width: "90px", // Уменьшен размер иконок
	height: "90px",
	[theme.breakpoints.down("sm")]: {
		width: "40px", // Уменьшен размер иконок на мобильных
		height: "40px",
	},
}));

const StyledLoremTextBox = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: "787px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "0 10px", // Уменьшены отступы
	boxSizing: "border-box",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "317px",
	},
}));

const StyledLoremText = styled("p")(({ theme }) => ({
	fontFamily: "sans-serif",
	fontSize: "16px", // Уменьшен размер шрифта
	fontWeight: "400",
	textAlign: "justify",
	maxWidth: "100%",
	overflowWrap: "break-word",
	marginTop: "10px", // Уменьшен отступ сверху
	[theme.breakpoints.down("sm")]: {
		fontSize: "14px", // Размер шрифта на мобильных
	},
}));
