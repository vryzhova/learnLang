/* eslint-disable react/prop-types */
import style from "./card.scss";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Card = (props) => {
  return (
    <div className={style.card}>
      <IconButton onClick={props.backBtn}>
        <ArrowBackIosIcon />
      </IconButton>
      <div className={style.card__content}>
        <div className={style.cardContent}>
          <div className={style.mainword}>{props.word}</div>
          <div className={style.transcription}>{props.transcription}</div>
          <div className={style.translate}>
            {!props.clicked ? (
              <Button
                variant="contained"
                onClick={props.handleTranslate}
                sx={{ bgcolor: "#d81b60" }}
              >
                Перевод
              </Button>
            ) : (
              <div>{props.translate}</div>
            )}
          </div>
        </div>
      </div>
      <IconButton onClick={props.nextBtn}>
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
  );
};

export default Card;

// props.handleProgress
