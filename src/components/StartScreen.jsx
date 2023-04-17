import React from 'react'
import styles from './StartScreen.module.css'

function StartScreen() {
  return (
    <div className={styles.start}>
        <h1>Palavra Secreta</h1>
        <button>Iniciar Jogo</button>
    </div>
  )
}

export default StartScreen