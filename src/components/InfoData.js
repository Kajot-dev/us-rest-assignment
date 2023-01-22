import styles from '@/styles/Main.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function InfoData({ infoText, error }) {

    if (error) {
      return (
        <div className={`${styles.pane} ${inter.className}`}>
          <h3>An error occurred!</h3>
          <p>{error}</p>
        </div>
      )
    } else {
      return (
        <div className={`${styles.pane} ${inter.className}`}>
          <h3>Info:</h3>
          <p>{infoText}</p>
        </div>
      )
    }

}