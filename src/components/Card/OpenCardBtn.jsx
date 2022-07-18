import Button from '@mui/material/Button';


const OpenCardButton = (props) => {
    return (
        <Button style={{backgroundColor: "#78002e"}} variant="contained" isclick={props.isclick.toString()}>Начать изучение</Button>
    )
}

export default OpenCardButton;