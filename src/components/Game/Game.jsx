import { useState, useRef, useEffect } from 'react';
import styles from './Game.module.css'

//components
import GameFooter from '../GameFooter/GameFooter';
import GameHeader from '../GameHeader/GameHeader';
import GameTip from '../GameTip/GameTip';

function Game({category, letters,guessedLetters, wrongLetters,verifyLetter, guesses, guessesQuantity,score, showTip, onShowTip}) {
  
  const [letter, setLetter] = useState("");
  
  const letterInputRef = useRef('letter')
 
  const [classPanelFade, setClassPanelFade] = useState(styles.panelFade);

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }
  

  useEffect(() => {
    setClassPanelFade(styles.panelFade)
    const timeout= setTimeout(()=>{
      setClassPanelFade("")
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  },[letters]) 

 
  return (
    <>
    <GameHeader score={score} guesses={guesses} guessesQuantity={guessesQuantity}/>
    <div className={styles.game}>
      <h2>ADIVINHE A PALAVRA</h2>
      <div className={styles.word}>
        <div className={classPanelFade}></div>
        {letters.map((letter, index)=>(
          <div className={styles.scene} key={index}>
            <div className={`${styles.cube} ${guessedLetters.includes(letter) ? styles.showRight : styles.showFront}`}>
              {guessedLetters.includes(letter) ? (
                <>
                <div className={`${styles.letter_face} ${styles.letter_face_front}`} />
                <div className={`${styles.letter_face} ${styles.letter_face_right}`} >{letter.toUpperCase()}</div>
                </>
              ): (
                <>
                <div className={`${styles.letter_face} ${styles.letter_face_front}`} />
                <div className={`${styles.letter_face} ${styles.letter_face_right}`} />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.letterInput}>
          <p className='mb-2'>Dê um palpite de uma letra da palavra:</p>
          <form onSubmit={handleSubmit}>
            <input 
              type='text' 
              name='letter' 
              value={letter} 
              maxLength={1} 
              required 
              onChange={(e) => setLetter(e.target.value)}
              ref={letterInputRef}
            />
            <button>JOGAR</button>
          </form>
      </div>
    </div>
    
    <GameFooter wrongLetters={wrongLetters} onShowTip={onShowTip}/>
    
    {showTip &&(
           <GameTip category={category} showTip={showTip} onShowTip={onShowTip}/>
    )}
    
    </>
  )
}

export default Game