import React from 'react'

import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <h1>Paws of Wonder</h1>
        <p>Click on the curious paws below to immerse yourself in a world of fascinating facts and intriguing stories.</p>
    </div>
  )
}

export default Header