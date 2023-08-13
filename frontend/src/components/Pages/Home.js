import React from 'react'
import Feed from '../Home/Feed'
import styles from './Home.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
      <Feed />     
    </div>
  )
}
