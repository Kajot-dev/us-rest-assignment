
import { Inter } from '@next/font/google'
import styles from '@/styles/Main.module.css'
import formStyles from '@/styles/form.module.css'
import Back from '@/components/Back.js'
import { useState } from 'react';
import InfoData from '@/components/InfoData';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function onSubmit(e) {
    e.preventDefault();
    const title = e.target[0].value.toLowerCase().replace(/\s/g, '');
    const reviewText = e.target[1].value.trim();

    if (title === '' || reviewText === '') {
      setInfoData(null);
      setInfoError("Please fill out both fields!");
      return;
    }
    //make a get request to /api/movies/${title}/review using fetch

    fetch(`/api/movies/${title}/review`, {
      method: 'POST',
      body: reviewText
    })
      .then(res => {
        if (res.status === 200) {
          return res.text();
        } else if (res.status === 404){
          throw new Error(`Movie "${title}" not found!`);
        } else {
          throw new Error("An unknown error occurred!");
        }
      })
      .then(data => {
        setInfoData(`Your review has type: ${data}!`);
        setInfoError(null);
      }).catch(err => {
        setInfoError(err.message);
      });
  }

  const [infoData, setInfoData] = useState(null);
  const [infoError, setInfoError] = useState(null);

  return (
    <main className={styles.main}>
      <Back text='Go back' />
      <div>
        <div className={styles.center}>
          <h1 className={inter.className}>Post a review</h1>
        </div>
      </div>
      <div className={`${formStyles.form} ${inter.className}`}>
        <h3 className={formStyles.title}>Tell us what you think.</h3>
        {(infoData || infoError) && <InfoData infoText={infoData} error={infoError}/>}
        <form onSubmit={onSubmit}>
          <input type='text' placeholder='Movie title' className={formStyles.input} />
          <textarea placeholder='Review text' className={formStyles.input} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </main>
  )
}
