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
  return (
    <div className={style.App}>
      <ResponsiveAppBar/>
      <div className={style.content}>
        {
          (checked) ? <Card/> : <OpenCardButton isclick={checked} onClick={handlerCard}/>
        }
      {
        words.map(word => <WordList {...word} key={word.id} /> )
      }
      </div>
      
    </div>
  );
}

export default App;
