/* eslint-disable react/prop-types */
import Button from "@mui/material/Button";

const OpenCardButton = (props) => {
  return (
    <Button
      style={{ backgroundColor: "#78002e" }}
      size="large"
      onClick={props.onClick}
      variant="contained"
    >
      Начать изучение
    </Button>
  );
};

export default OpenCardButton;
