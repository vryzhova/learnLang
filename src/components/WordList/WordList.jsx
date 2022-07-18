import style from './wordList.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const WordList = (props) => {
    

    return(
        <div className={style.wordlist}>
            <div className={style.id}> {props.id}</div>
            <div className={style.wordTheme}>{props.tags}</div>
            <div className={style.english}>{props.english}</div>
            <div className={style.russian}>{props.russian}</div>
            <div className={style.edit}>
                
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton> 
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton> 
                
            </div>
        </div>
    )
}

export default WordList