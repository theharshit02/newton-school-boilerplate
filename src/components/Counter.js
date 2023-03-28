import React, { useEffect, useState } from 'react'
import styles from './Counter.module.css'

const Counter = () => {
    const [count, setcount] = useState(1)
    const [click, setclick] = useState(false)

    useEffect(()=>{
        setcount(count*100)
    // eslint-disable-next-line
    },[])
    
  return (
    <div className={styles.counter}>
      <h1> Value is <span>{count}</span></h1>
      <button data-cy="click" onClick={()=>setclick(!click)}>Click</button>
    </div>
  )
}

export default Counter
