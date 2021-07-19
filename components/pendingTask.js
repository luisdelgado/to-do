import { Grid, Typography, TextField } from "@material-ui/core";
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
  spanButton: {
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
  gridButton: {
    marginLeft: "14px",
  },
  grid__dot: {
    height: "28px",
    width: "28px",
    border: "#191847 solid 1px",
    borderRadius: "50%",
    display: "inline-block",
  },
});

export default function PendingTask({
  task,
  completeTask,
  deleteTask,
  allowEdit,
  setAllowEdit,
  editTask,
}) {
  const classes = useStyles();
  const [name, setName] = useState(task.name);
  const [editMode, setEditMode] = useState(false);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      {!editMode && (
        <Grid
          className={classes.grid}
          container
          spacing={1}
          alignItems="center"
        >
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
              className={classes.spanButton}
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
          <Grid className={classes.gridButton}>
            <span
              className={classes.spanButton}
              onClick={() => {
                if (allowEdit === "" || allowEdit === task.id) {
                  setAllowEdit(task.id);
                  setEditMode(!editMode);
                }
              }}
            >
              <figure className={classes.span__figure}>
                <Image
                  src="/assets/edit.png"
                  width="6px"
                  height="6px"
                  alt="edit button"
                />
              </figure>
            </span>
          </Grid>
        </Grid>
      )}

      {editMode && (
        <Grid
          className={classes.grid}
          container
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <span className={classes.grid__dot}></span>
          </Grid>
          <Grid item xs>
            <TextField
              value={name}
              onChange={handleChange}
              onKeyPress={(event) => {
                if (
                  event.key == "Escape" ||
                  (name.length == 0 && event.key == "Enter")
                ) {
                  setName(task.name);
                  setAllowEdit("");
                  setEditMode(false);
                }
                if (name.length > 0 && event.key == "Enter") {
                  editTask({
                    id: task.id,
                    name: name,
                    pending: true,
                    lastChange: task.lastChange,
                  });
                  setName("");
                  setAllowEdit("");
                  setEditMode(false);
                }
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}

PendingTask.propTypes = {
  task: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  allowEdit: PropTypes.string.isRequired,
  setAllowEdit: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
