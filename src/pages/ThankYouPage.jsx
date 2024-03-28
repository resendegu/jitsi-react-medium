import React from "react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { getHint } from "../random/hints";

// stylings for the page
const useStyles = makeStyles(() => ({
  background: {
    backgroundColor: "rgb(10, 25, 41)",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    colorScheme: "dark",
    flexDirection: "column",
  },
  hint: {
    fontSize: "0.9rem",
    textAlign: "justify" 
  },
  card: {
    backgroundColor: "rgb(0, 30, 60)",
    colorScheme: "dark",
    border: "1px solid rgb(19, 47, 76)",
    color: "white",
    padding: "3rem",
    width: "340px",
  },
  input: {
    width: "350px",
  },
}));

const ThankYouPage = () => {
  const classes = useStyles();

  // we will be preferring dark theme for our page
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: "dark",
        },
      }),
    []
  );

  // we will use this to navigate next page
  const history = useHistory();

  return (
    <div className={classes.background}>
      <Paper className={classes.card} elevation={4}>
        <h4>Obrigado</h4>
        <ThemeProvider theme={theme}>
          <div style={{ marginBottom: "1.5rem" }}></div>
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <p>Você pode voltar e entrar em outra sala de reunião!</p>
            <Button
              variant="contained"
              color="default"
              onClick={() => {
                history.push(`/`);
              }}
            >
              Voltar para o início
            </Button>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4>Você sabia?</h4>
            <p className={classes.hint}>
              <i>{getHint()}</i>
            </p>
          </div>
        </ThemeProvider>
      </Paper>
    </div>
  );
};

export default ThankYouPage;
