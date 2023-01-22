import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.spaceBetween}`}>
      <div>
        <div className={styles.center}>
          <h1 className={inter.className}>Movie ratings</h1>
        </div>
      </div>
      

      <div className={`${inter.className} ${styles.info}`}>
        <p>
          This is a simple client for the movie ratings API. It is a homework assignment for the US course.
          Api itself is available under the <span className={styles.code}>/api</span> route.
        </p>
        <p>
          Three routes are available:
        </p>
        <div>
          <ul>
            <li>
              <span className={styles.code}>/api/movies</span> - POST
            </li>
            <li>
              <span className={styles.code}>/api/movies/{'[title]'}</span> - GET
            </li>
            <li>
              <span className={styles.code}>/api/movies/{'[title]'}/review</span> - POST
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.grid}>
        <Link href="/movies" className={styles.card}>
          <h2 className={inter.className}>
            Get movie by title <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Client for getting information about the movie, such as positive and negative sentiment counts!
          </p>
        </Link>

        <Link href="/review" className={styles.card}>
          <h2 className={inter.className}>
            Post a review <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Client for posting a review. Returns either POSITIVE/NEGATIVE/NEUTRAL/UNKNOWN
          </p>
        </Link>

        <Link href="/newMovie" className={styles.card}>
          <h2 className={inter.className}>
            Add a movie <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Useful for defining a movie that doesn&apos;t exist...
          </p>
        </Link>
      </div>
    </main>
  )
}
