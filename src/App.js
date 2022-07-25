import style from './App.css';
import { useState } from 'react';
import ResponsiveAppBar from './components/Header/Header';
import  WordList from './components/WordList/WordList';
import words from './components/WordList/words';
import Card from './components/Card/Card';
import OpenCardButton from './components/Card/OpenCardBtn'

function App(props) {
  const [checked, setChecked] = useState(props.checked || false);
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
  return (
    <div className={style.App}>
      <ResponsiveAppBar/>
      <div className={style.content}>
        <div className={style.cards}>
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

        <div className={style.wordlist}>
        {
        words.map(word => <WordList {...word} key={word.id} /> )
      }
        </div>
      </div>
      
    </div>
  );
}

export default App;
