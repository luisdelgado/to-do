import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Image from "next/image";

const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
  },
  grid__dot: {
    height: "28px",
    width: "28px",
    border: "#2B44FF solid 1px",
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center",
    alignItems: "center",
  },
  dot__figure: {
    margin: "0",
    height: "28px",
    paddingTop: "3px",
  },
});

export default function CompletedTask({ task, addTask }) {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container spacing={1} alignItems="center">
      <Grid item>
        <span className={classes.grid__dot} onClick={() => addTask(task)}>
          <figure className={classes.dot__figure}>
            <Image
              src="/assets/check.svg"
              width="9px"
              height="7px"
              alt="check_icon"
            />
          </figure>
        </span>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">
          <strike>{task.name}</strike>
        </Typography>
      </Grid>
    </Grid>
  );
}

CompletedTask.propTypes = {
  task: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
};
