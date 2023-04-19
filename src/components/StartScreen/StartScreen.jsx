import React from 'react'
import styles from './StartScreen.module.css'

function StartScreen({startGame}) {
  return (
    <div className={styles.start}>
        <h1>Palavra Secreta</h1>
        <button onClick={startGame}>
          Iniciar Jogo
        </button>
    </div>
  )
}

export default StartScreen