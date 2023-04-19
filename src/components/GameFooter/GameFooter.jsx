

import styles from './GameFooter.module.css'


function GameFooter({wrongLetters, onShowTip}) {
    
    
    return (
    <div className={styles.gameFooter}>
        
        <div className={styles.wrongLetters}>
            {wrongLetters.length>0 &&(
                    <>Letras incorretas: </>
            )}
            {wrongLetters.map((letter,i)=>(
            
                <span key={i}>
                {letter} 
                {wrongLetters.length>1 && i!== wrongLetters.length-1 &&(
                <>,</>
                )}
                </span>
            
            ))}
        </div>
        

        <button className={styles.buttonTip}onClick={onShowTip}>
            DICA ?
        </button>
        
    </div>
    )
}

export default GameFooter