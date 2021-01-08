import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.png" width={1600} height={550} alt="test logo" />
        <img
          src={require('../public/logo.png?webp')}
          alt="test logo two"
          style={{ width: '1600px', height: '550px' }}
        />
      </main>

      <footer className={styles.footer}>
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  );
}
