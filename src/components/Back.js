import Link from 'next/link'
import { Inter } from '@next/font/google';
import styles from '@/styles/Back.module.css';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })


export default function Back({ text = 'Go back' }) {

    let [isHome, setIsHome] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/') {
            setIsHome(true);
        }
    }, []);

    return (
        <div>
            {!isHome && <Link href="/" className={`${styles.back} ${inter.className}`}><span>&lt;-</span> {text}</Link>}
        </div>
    )
}