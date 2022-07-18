import style from './card.css';
import Button from '@mui/material/Button';
const Card = (props) => {
    return (
        <div className={style.card}>
            <div className={style.mainword}>{props.word} kfkkfkfk</div>
            <div className={style.transcription}>{props.transcription}</div>
            <Button variant="contained">Перевод</Button>
        </div>
    )
}

export default Card