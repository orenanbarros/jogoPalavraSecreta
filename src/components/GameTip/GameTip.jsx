import React from 'react'
import styles from './GameTip.module.css'
import {AiOutlineCloseSquare} from 'react-icons/ai'


function GameTip({showTip,category,onShowTip}) {
  return (
    <div className= {`${styles.tip} ${showTip?"":styles.hideTip} `}>
        <div className={styles.titleTip}>
          DICA
          <AiOutlineCloseSquare onClick={onShowTip} size={20}/>
        </div>
        <div className={styles.contentTip}>
            <span>{category.toUpperCase()}</span>
        </div>
    </div>
  )
}

export default GameTip