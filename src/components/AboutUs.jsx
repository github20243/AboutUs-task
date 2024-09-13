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
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
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
	padding: "10px 15px",
	boxSizing: "border-box",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "270px",
		padding: "10px 5px",
	},
}));

const StyledTyphograpyText = styled(Typography)(({ theme }) => ({
	textAlign: "center",
	fontWeight: "600",
	fontSize: "28px",
	marginBottom: "15px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",
	},
}));

const StyledSocialNetworks = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: "468px",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "15px",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "211px",
	},
}));

const StyledIcon = styled("img")(({ theme }) => ({
	width: "90px",
	height: "90px",
	[theme.breakpoints.down("sm")]: {
		width: "40px",
		height: "40px",
	},
}));

const StyledLoremTextBox = styled("div")(({ theme }) => ({
	width: "100%",
	maxWidth: "787px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	// padding: "0 10px",
	boxSizing: "border-box",
	[theme.breakpoints.down("sm")]: {
		width: "300px",
		border: "1px solid black",
	},
}));

const StyledLoremText = styled("p")(({ theme }) => ({
	fontFamily: "sans-serif",
	fontSize: "18px",
	fontWeight: "400",
	textAlign: "justify", // Важное изменение для выравнивания текста
	maxWidth: "100%",
	overflowWrap: "break-word", // Автоматический перенос слов
	marginTop: "10px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",
		textAlign: "center",
		lineHeight: "27px",
		fontFamily: "Montserrat,sans-serif",
    fontWeight:500
	},
}));
