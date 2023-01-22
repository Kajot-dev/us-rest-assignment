import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'
import formStyles from '@/styles/form.module.css'
import Back from '@/components/Back';
import { useState } from 'react';
import MovieData from '@/components/MovieData';

const inter = Inter({ subsets: ['latin'] })

export default function Movies() {

  function onSubmit(e) {
    e.preventDefault();
    const title = e.target[0].value.toLowerCase().replace(/\s/g, '');

    if (title === '') {
      setMovieError("Please fill out the field!");
      setMovieData(null);
      return;
    }
    //make a get request to /api/movies/${title} using fetch

    fetch(`/api/movies/${title}`)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404){
          throw new Error(`Movie "${title}" not found!`);
        } else {
          throw new Error("An unknown error occurred!");
        }
      })
      .then(data => {
        setMovieData(data);
        setMovieError(null);
      }).catch(err => {
        setMovieError(err.message);
      });
    
  
  }

  const [movieData, setMovieData] = useState(null);
  const [movieError, setMovieError] = useState(null);

  const titleInput = <input type='text' placeholder='Movie title' className={formStyles.input} />;
  const submitButton = <button type='submit'>Let&apos;s check it!</button>

  return (
    <main className={styles.main}>
      <Back text='Go back' />
      <div>
        <div className={styles.center}>
          <h1 className={inter.className}>Find a movie</h1>
        </div>
      </div>
      <div className={`${formStyles.form} ${inter.className}`}>
        <h3 className={formStyles.title}>What are you looking for?</h3>
        {(movieData !== null || movieError !== null) && <MovieData movieJSON={movieData} movieError={movieError}/>}
        <form onSubmit={onSubmit}>
          {titleInput}
          {submitButton}
        </form>
      </div>
      
    </main>
  )
}
