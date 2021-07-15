import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";
import NewTask from "../components/newTask";
import { useState } from "react";

const useStyles = makeStyles({
  appBar: {
    height: "30vh",
  },
  appBar__toolbar: {
    justifyContent: "center",
  },
  figure: {
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
  card__grid: {
    padding: "25px",
  },
  grid__div: {
    width: "100%",
    textAlign: "center",
    paddingTop: "16px",
  },
  figure__div: {
    width: "100%",
    padding: "0 46px",
  },
});

export default function Home() {
  const [pendencies, setPendencies] = useState([]);
  const classes = useStyles();

  const addTask = (newActivity) => {
    setPendencies((pendencies) => [...pendencies, newActivity]);
    console.log(pendencies);
  };

  return (
    <div>
      <main>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.appBar__toolbar}>
            <figure className={classes.figure}>
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
              <Grid className={classes.card__grid} container item xs={12}>
                {/* Nenhuma tarefa criada ainda */}
                {pendencies.length === 0 && (
                  <div>
                    <div className={classes.grid__div}>
                      <Typography variant="h1">
                        Nenhuma tarefa criada ainda.
                      </Typography>
                      <figure className={classes.figure}>
                        <div className={classes.figure__div}>
                          <Image
                            src="/assets/illustration_empty_state.svg"
                            width="390px"
                            height="182px"
                            alt="nenuma atividade registrada"
                          />
                        </div>
                      </figure>
                    </div>
                    <Typography variant="body1">
                      Que tal organizar as ideias criando uma lista agora?
                    </Typography>
                    <NewTask addTask={addTask} />
                  </div>
                )}

                {/* Tarefas pendentes */}
                {pendencies?.map((pending) => (
                  <span key={pending.id}>{pending.name}</span>
                ))}
                <NewTask addTask={addTask} />
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
