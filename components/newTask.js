import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
    opacity: "0.4",
  },
  dot: {
    height: "28px",
    width: "28px",
    border: "#191847 solid 1px",
    borderRadius: "50%",
    display: "inline-block",
  },
});

export default function NewTask({ addTask }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Grid className={classes.grid} container spacing={1} alignItems="center">
      <Grid item>
        <span className={classes.dot}></span>
      </Grid>
      <Grid item>
        <TextField
          placeholder="Adicione uma tarefa"
          value={name}
          onChange={handleChange}
          onKeyPress={(event) => {
            if (event.key == "Enter")
              addTask({ id: 1, name: name, pending: true });
          }}
        />
      </Grid>
    </Grid>
  );
}

NewTask.propTypes = {
  addtask: PropTypes.func.isRequired,
};
