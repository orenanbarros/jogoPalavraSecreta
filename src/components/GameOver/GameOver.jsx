import React from 'react'
import styles from './GameOver.module.css'
import {FaSkull} from 'react-icons/fa'

function GameOver({retry, score}) {
  return (
    <div className={styles.start}>
      <h1>
        FIM DE JOGO<FaSkull/>
      </h1>
      <p className='mb-8'>Sua pontuação foi: 
        <span className='text-yellow-400 ml-2'>
          {score}
        </span>
      </p>
      <button onClick={retry}>
        TENTAR OUTRA VEZ
      </button>
    </div>
  )
}

export default GameOver