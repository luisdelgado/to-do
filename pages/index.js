import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Image from "next/image";

const useStyles = makeStyles({
  appBar: {
    height: "30vh",
    minHeight: "150px",
  },
  appBar__toolbar: {
    justifyContent: "center",
  },
  toolbar__figure: {
    margin: "30px 0px",
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
