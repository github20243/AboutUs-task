const StyledContainer = styled("div")(({ theme }) => ({
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
}));

const StyledTyphograpyText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "600",
  fontSize: "30px",
  [theme.breakpoints.down("sm")]: {
    fontFamily: "sans-serif",
    fontSize: "20px",
  }
}));

const StyledSocialNetworks = styled("div")(({ theme }) => ({
  width: "468px",
  height: "102px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "211px",
    height: "46px",
  }
}));

const StyledWhatsapIcon = styled("img")(({ theme }) => ({
  width: "102px",
  height: "102px",
  [theme.breakpoints.down("sm")]: {
    width: "46px",
    height: "46px",
  }
}));

const StyledInstagramIcon = styled("img")(({ theme }) => ({
  width: "102px",
  height: "102px",
  [theme.breakpoints.down("sm")]: {
    width: "46px",
    height: "46px",
  }
}));

const StyledTelegramIcon = styled("img")(({ theme }) => ({
  width: "102px",
  height: "102px",
  [theme.breakpoints.down("sm")]: {
    width: "46px",
    height: "46px",
  }
}));

const StyledLoremTextBox = styled("div")(({ theme }) => ({
  width: "787px",
  height: "470px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "317px",
    height: "378px",
  }
}));

const StyledLoremText = styled("p")(({ theme }) => ({
  fontFamily: "sans-serif",
  fontSize: "24px",
  fontWeight: "400",
  lineHeight: "46.56px",
  textAlign: "center",
  maxWidth: "100%",
  overflowWrap: "break-word", // Добавьте это свойство
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    fontWeight: "400",
  }
}));
