import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  rectangle: {
    height: "25vh",
    minHeight: "150px",
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <main>
        <AppBar position="static" className={classes.rectangle}>
          <Toolbar></Toolbar>
        </AppBar>
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
