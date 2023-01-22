import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'
import formStyles from '@/styles/form.module.css'
import Back from '@/components/Back';
import { useState } from 'react';
import InfoData from '@/components/InfoData';

const inter = Inter({ subsets: ['latin'] })

export default function NewMovie() {

  function onSubmit(e) {
    e.preventDefault();
    const title = e.target[0].value.trim();
    const director = e.target[1].value.trim();

    if (title === '' || director === '') {
      setInfoData(null);
      setInfoError("Please fill out both fields!");
      return;
    }
    //make a get request to /api/movies/${title}/review using fetch

    fetch(`/api/movies/`, {
      method: 'POST',
      body: JSON.stringify({ title, director }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 201) {
          setInfoData(`Movie "${title}" added!`);
          setInfoError(null);
        } else if (res.status === 400){
          throw new Error(`Invalid data or movie already exists!`);
        } else {
          throw new Error("An unknown error occurred!");
        }
      }).catch(err => {
        setInfoError(err.message);
      });
  }

  let [infoData, setInfoData] = useState(null);
  let [infoError, setInfoError] = useState(null);

  return (
    <main className={styles.main}>
      <Back text='Go back' />
      <div>
        <div className={styles.center}>
          <h1 className={inter.className}>Lights, camera, action!</h1>
        </div>
      </div>
      <div className={`${formStyles.form} ${inter.className}`}>
        <h3 className={formStyles.title}>Got any ideas?</h3>
        {(infoData || infoError) && <InfoData infoText={infoData} error={infoError}/>}
        <form onSubmit={onSubmit}>
          <input type='text' placeholder='Movie title' className={formStyles.input} />
          <input type='text' placeholder='Director' className={formStyles.input} />
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    </main>
  )
}