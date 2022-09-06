import { useState, useEffect } from 'react';
import style from '../App.css';
import Card from '../components/Card/Card';
import OpenCardButton from '../components/Card/OpenCardBtn'

const GamePage  = (props)=> {
    const [checked, setChecked] = useState(props.checked || false);
    const [words, setWords] = useState([]);
    const handlerCard = () => {
        setChecked(prevState => !prevState);
    };
    const [wordItem, setwordItem] = useState(0);
    const handleNextWord = () => {  
        setwordItem(prevState => prevState + 1 ) 
        
    }
    const handleBackWord = () => {
        setwordItem(prevState => prevState - 1)
    }
    useEffect(() => {
        fetch("http://itgirlschool.justmakeit.ru/api/words").then(res => res.json()).then(data => {
        setWords(data);
        })
    })
    return (
        <div className={style.card}>
        {
            (checked) ? <Card 
            onClick={handlerCard} 
            word={words[wordItem].english} 
            transcription={words[wordItem].transcription} 
            translate={words[wordItem].russian}
            nextBtn={handleNextWord} 
            backBtn={handleBackWord} /> : <OpenCardButton onClick={handlerCard}/>
        }
        </div>
    )
}

export default GamePage;