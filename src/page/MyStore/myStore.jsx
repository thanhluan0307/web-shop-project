import React from 'react'
import styles from './myStore.module.scss'

function myStore() {

    const dataTest=[{
        img:'data:image/jpeg;base64,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',
        size:'',
        color:'',
        price:'120000',
    }
    ]

    

  return (
    <>  
    <div className={styles.container}>
        <h1>Giỏ hàng của bạn</h1>
    </div>
    </>
  )
}

export default myStore