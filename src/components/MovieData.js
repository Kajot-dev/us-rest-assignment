import styles from '@/styles/Main.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MovieData({ movieJSON, movieError }) {

    if (movieError) {
      return (
        <div className={`${styles.pane} ${inter.className}`}>
          <h3>An error occurred!</h3>
          <p>{movieError}</p>
        </div>
      )
    } else {
      return (
        <div className={`${styles.pane} ${inter.className}`}>
          <h3>{movieJSON.title}</h3>
          <p>Director: {movieJSON.director}</p>
          <p>Positive reviews: {movieJSON.positiveSentimentCounter}</p>
          <p>Negative reviews: {movieJSON.negativeSentimentCounter}</p>
        </div>
      )
    }

}