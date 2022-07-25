import Button from '@mui/material/Button';


const OpenCardButton = (props) => {
    return (
        <Button style={{backgroundColor: "#78002e"}}  onClick={props.onClick} variant="contained">Начать изучение</Button>
    )
}

export default OpenCardButton;