import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    height: "30vh",
  },
  appBar__toolbar: {
    justifyContent: "center",
  },
  toolbar__figure: {
    margin: "5vh 0px",
  },
  grid: {
    marginTop: "-13vh",
  },
  grid__card: {
    width: "100%",
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
  },
  card__div: {
    width: "100%",
    textAlign: "center",
    paddingTop: "16px",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <main>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.appBar__toolbar}>
            <figure className={classes.toolbar__figure}>
              <Image
                src="/assets/logo.svg"
                width="104"
                height="34px"
                alt="to-do logo"
              />
            </figure>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center">
          <Grid className={classes.grid} item xs={8}>
            <Card className={classes.grid__card}>
              <Grid container item xs={12}>
                <div className={classes.card__div}>
                  <Typography variant="h1">
                    Nenhuma tarefa criada ainda.
                  </Typography>
                </div>
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <h1>to-do</h1>
      </main>

      <footer>
        <p>
          Um teste projetado pela{" "}
          <a
            href="https://guava.software/"
            target="_blank"
            rel="noreferrer license"
          >
            Guava
          </a>
        </p>
      </footer>
    </div>
  );
}
