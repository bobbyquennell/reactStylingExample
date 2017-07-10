import React from 'react'
import Radium from 'radium'
import styles from './frame-styles'


function Frame({ children }) {
  return <div style={styles.root}>{children}</div>
}

export default Radium(Frame)
