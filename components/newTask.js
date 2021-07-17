import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
    opacity: "0.4",
  },
  grid__dot: {
    height: "28px",
    width: "28px",
    border: "#191847 solid 1px",
    borderRadius: "50%",
    display: "inline-block",
  },
});

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default function NewTask({ addTask }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Grid className={classes.grid} container spacing={1} alignItems="center">
      <Grid item>
        <span className={classes.grid__dot}></span>
      </Grid>
      <Grid item xs>
        <TextField
          placeholder="Adicione uma tarefa"
          value={name}
          onChange={handleChange}
          onKeyPress={(event) => {
            if (event.key == "Enter") {
              addTask({
                id: uuidv4(),
                name: name,
              });
              setName("");
            }
          }}
          fullWidth
        />
      </Grid>
    </Grid>
  );
}

NewTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};
