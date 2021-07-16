import { Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
  },
  dot: {
    height: "28px",
    width: "28px",
    border: "#191847 solid 1px",
    borderRadius: "50%",
    display: "inline-block",
  },
});

export default function NewTask({ pendingTask, completeTask }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Grid className={classes.grid} container spacing={1} alignItems="center">
      <Grid item>
        <span
          className={classes.dot}
          onClick={() => completeTask(pendingTask)}
        ></span>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">{pendingTask.name}</Typography>
      </Grid>
    </Grid>
  );
}

NewTask.propTypes = {
  pendingTask: PropTypes.object.isRequired,
  completeTask: PropTypes.func.isRequired,
};
