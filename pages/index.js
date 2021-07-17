import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import Image from "next/image";
import { Grid, Typography } from "@material-ui/core";
import NewTask from "../components/newTask";
import { useState } from "react";
import PendingTask from "../components/pendingTask";
import CompletedTask from "../components/completedTask";
import ImageState from "../components/imageState";

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
    padding: "4vh",
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
  grid__typography: {
    marginTop: "4vh",
  },
});

export default function Home() {
  const [pendencies, setPendencies] = useState([]);
  const [completed, setCompleted] = useState([]);
  const classes = useStyles();

  const addTask = (task) => {
    // Atualizando última modificação da nova task
    (task.pending = true), (task.lastChange = +new Date());

    // Removendo tarefa de feitas
    const newCompleted = completed.filter(
      (complete) => complete.id !== task.id
    );
    setCompleted(newCompleted);

    // Adicionando tarela em pendências
    setPendencies((pendencies) => [...pendencies, task]);
    console.log(pendencies);
  };

  const completeTask = (task) => {
    // Atualizando última modificação da nova task
    (task.pending = false), (task.lastChange = +new Date());

    // Removendo tarefa de pendências
    const newPendencies = pendencies.filter(
      (pending) => pending.id !== task.id
    );
    setPendencies(newPendencies);

    // Adicionando tarefa em feitas
    setCompleted((completed) => [...completed, task]);
    console.log(pendencies, completed);
  };

  function orderByOldest(a, b) {
    console.log(a, b);
    if (a.props.task.lastChange > b.props.task.lastChange) {
      return 1;
    }
    if (a.props.task.lastChange < b.props.task.lastChange) {
      return -1;
    }
    return 0;
  }

  function orderByNewest(a, b) {
    console.log(a, b);
    if (a.props.task.lastChange < b.props.task.lastChange) {
      return 1;
    }
    if (a.props.task.lastChange > b.props.task.lastChange) {
      return -1;
    }
    return 0;
  }

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
              <Grid className={classes.card__grid} item xs={12}>
                {/* Nenhuma tarefa criada ainda */}
                {pendencies.length === 0 && completed.length === 0 && (
                  <ImageState
                    title="Nenhuma tarefa criada ainda."
                    image="/assets/illustration_empty_state.svg"
                    altImage="não há TO-DOs na lista ainda"
                    suggestion="Que tal organizar as ideias criando uma lista agora?"
                    placeholderInput="Um passo de cada vez"
                    addTask={addTask}
                  />
                )}

                {/* Tarefas pendentes */}
                {pendencies.length > 0 && (
                  <>
                    <Typography variant="body1">
                      Pendente ({pendencies.length})
                    </Typography>
                    {pendencies
                      .map((pending) => (
                        <PendingTask
                          key={pending.id}
                          task={pending}
                          completeTask={completeTask}
                        />
                      ))
                      .sort(orderByOldest)}
                    <NewTask
                      placeholder="Cuidado com o Burnout, viu?"
                      addTask={addTask}
                    />
                  </>
                )}

                {/* Tarefas completeadas */}
                {completed.length > 0 ? (
                  <>
                    {pendencies.length === 0 && (
                      <ImageState
                        title="Tudo pronto!"
                        image="/assets/illustration_success.svg"
                        altImage="parabenizando o usuário por ter completado todos os itens"
                        suggestion="Sensação de dever cumprido. Que tal um café agora?"
                        placeholderInput="Pera, tem mais uma coisa"
                        addTask={addTask}
                      />
                    )}
                    <Typography
                      className={classes.grid__typography}
                      variant="body1"
                    >
                      Feito ({completed.length})
                    </Typography>
                    {completed
                      .map((complete) => (
                        <CompletedTask
                          key={complete.id}
                          task={complete}
                          addTask={addTask}
                        />
                      ))
                      .sort(orderByNewest)}
                  </>
                ) : null}
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
