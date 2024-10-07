import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
              <img src="/images/logo_blanco-01.png" alt="Logo" width="120px" />
              <p className={styles.copyright}>&copy Copyright MonsterArts - Sena 2024</p>
              <p>Mapa</p>
    </div>
  )
}

export default Footer
