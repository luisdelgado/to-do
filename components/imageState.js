import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { Typography } from "@material-ui/core";
import NewTask from "../components/newTask";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  div: {
    width: "100%",
    textAlign: "center",
    paddingTop: "16px",
  },
  div__figure: {
    margin: "5vh 0px",
  },
  figure__div: {
    width: "100%",
    padding: "0 46px",
  },
});

export default function ImageState({ title, image, altImage, suggestion, placeholderInput, addTask }) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.div}>
                <Typography variant="h1">
                {title}
                </Typography>
                <figure className={classes.div__figure}>
                <div className={classes.figure__div}>
                    <Image
                    src={image}
                    width="390px"
                    height="182px"
                    alt={altImage}
                    />
                </div>
                </figure>
            </div>
            <Typography variant="body1">
                {suggestion}
            </Typography>
            <NewTask
                placeholder={placeholderInput}
                addTask={addTask}
            />
        </div>
    );
}

ImageState.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    altImage: PropTypes.string.isRequired,
    suggestion: PropTypes.string.isRequired,
    placeholderInput: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired,
};