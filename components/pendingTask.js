import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PropTypes from "prop-types";

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
});

export default function NewTask({ task, completeTask }) {
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
    </Grid>
  );
}

NewTask.propTypes = {
  task: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
};
