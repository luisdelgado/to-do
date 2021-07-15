import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function NewTask() {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} container spacing={1} alignItems="center">
      <Grid item>
        <span className={classes.dot}></span>
      </Grid>
      <Grid item>
        <TextField
          placeholder="Adicione uma tarefa"
          onKeyPress={(event) => {
            if (event.key == "Enter") console.log("enter");
          }}
        />
      </Grid>
    </Grid>
  );
}
