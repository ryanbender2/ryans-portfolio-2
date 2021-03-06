import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello There</title>
        <meta name="description" content="Ryan created this." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.h1 className={styles.title} whileHover={{ scale: 1.1 }}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </motion.h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <motion.a href="https://nextjs.org/docs" className={styles.card} whileHover={{ scale: 1.05 }}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </motion.a>

          <motion.a href="https://nextjs.org/learn" className={styles.card} whileHover={{ scale: 1.05 }}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </motion.a>

          <motion.a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
            whileHover={{ scale: 1.05 }}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </motion.a>

          <motion.a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            whileHover={{ scale: 1.05 }}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </motion.a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
