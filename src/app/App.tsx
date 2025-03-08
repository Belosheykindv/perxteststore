import React from 'react'
import styles from './App.module.css'
import { Router } from './Router'

export function App() {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  )
}
