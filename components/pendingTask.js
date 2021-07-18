import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
  },
  gridItem: {
    marginTop: "3px !important",
  },
  item__dot: {
    paddingTop: "3px",
    height: "28px",
    width: "28px",
    border: "#191847 solid 1px",
    borderRadius: "50%",
    display: "inline-block",
  },
  grid__span: {
    height: "18px",
    width: "18px",
    border: "#2B44FF solid 1px",
    borderRadius: "50%",
    display: "inline-block",
  },
  span__figure: {
    margin: "0",
    height: "6px",
    paddingLeft: "5px",
  },
});

export default function PendingTask({ task, completeTask, deleteTask }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Grid className={classes.grid} container spacing={1} alignItems="center">
      <Grid className={classes.gridItem} item>
        <span
          className={classes.item__dot}
          onClick={() => completeTask(task)}
        ></span>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">{task.name}</Typography>
      </Grid>
      <Grid>
        <span
          className={classes.grid__span}
          onClick={() => {
            if (window.confirm("Deseja deletar essa tarefa?")) {
              deleteTask(task);
            }
          }}
        >
          <figure className={classes.span__figure}>
            <Image
              src="/assets/delete.svg"
              width="6px"
              height="6px"
              alt="remove button"
            />
          </figure>
        </span>
      </Grid>
    </Grid>
  );
}

PendingTask.propTypes = {
  task: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
