

import styles from './GameHeader.module.css'

function GameHeader({score,guesses,guessesQuantity }) {
    
    return (
    <div className={styles.gameHeader}>
        <div className={styles.score}>Pontuação:<span>{score}</span></div>
        <p>Você {guesses<guessesQuantity?'ainda':''} tem<span>{guesses}</span>tentativ{guesses>1?'as':'a'}!</p>
    </div>
    )
}

export default GameHeader