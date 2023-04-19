//css
import styles from './App.module.css'

//React
import { useState, useEffect } from 'react';

//Data 
import {wordsList} from './data/words'

//components
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';

//backgroundImage
import backgroundImage from './assets/backgorund.png'

//stages
const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"},
]

function App() {
  //quantidade de tentativas do jogo
  const guessesQuantity = 5

  const[gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const[pickedCategory, setPickedCategory] = useState("")
  const[letters, setLetters] = useState([])
  
  
  const[guessedLetters, setGuessedLetter] = useState([])//letras adivinhadas corretamente
  const[wrongLetters, setwrongLetters] = useState([])//letras incorretas
    
  const[score, setScore] = useState(0); //pontuacao
  //const[guesses,setGuesses] = useState(guessesQuantity) //tentativas
  const guesses =  guessesQuantity - wrongLetters.length
  
  const[showTip, setShowTip] = useState(false)


    
  const onShowTip = ()=>{
      setShowTip(!showTip)
  }

  const pickWordAndCategory = ()=>{
    //escolhe uma categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)]
    
    //escolhe uma palavra aleatoria da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)
    return {word, category}
    
  }

  const startGame = ()=>{
    
    //escolher categoria e palavra
    const {word, category} = pickWordAndCategory();

    //transforma a palavra em um array de letras e seta no state
    let wordLetters = word.split("")
    
    //fill states
    setLetters(wordLetters.map(l => l.toLowerCase()))
    //setPickedWord(word)
    setPickedCategory(category)

    
    setGameStage(stages[1].name)
   
    //inicia o jogo
    clearStates()
  }

  const clearStates = ()=>{
    setGuessedLetter([])
    setwrongLetters([])
    //setGuesses(3)
  }

  //VERIFICA A LETRA DIGITADA
  const verifyLetter = (letter)=>{

    if(guessedLetters.includes(letter) || wrongLetters.includes(letter))
      return
    
    if(letters.includes(letter)){
      //adiciona letras corretas ao array que ja tinha letras corretas
      setGuessedLetter((prev) => [
        ...prev, letter
      ])
    }else{
      //adiciona letras erradas ao array que ja tinha letras incorretas
      setwrongLetters((prev) => [
        ...prev, letter
      ])
      //decrementa tentativas
      //setGuesses(prev => prev - 1)
      
    }
  }
  
  //REINICIAR O JOGO
  const retry =()=>{
    setScore(0);
    setwrongLetters([])
    //setGuesses(guessesQuantity);
    setGameStage(stages[0].name);
  }

   //finaliza o jogo
   const finishGame = ()=>{
    setGameStage(stages[2].name);
  }

  //verifica palavra correta 
  const uniqueLetters = [...new Set(letters)];
  if(uniqueLetters.length>0 && (guessedLetters.length === uniqueLetters.length)){
    setTimeout(() => {
      setScore((actualScore) => actualScore + 100)
      startGame()
    },800);
  }
  


  return (
    <div className={styles.app} style={{backgroundImage:`url(${backgroundImage})`}}>
      
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      
      {gameStage === 'game' && guesses !==0  && 
        <Game 
          category={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters} 
          wrongLetters={wrongLetters}
          verifyLetter={verifyLetter} 
          onShowTip={onShowTip}
          showTip={showTip}
          finishGame = {finishGame}
          score={score}
          guesses={guesses}
          guessesQuantity={guessesQuantity}
          
        />}
      {guesses === 0 && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
