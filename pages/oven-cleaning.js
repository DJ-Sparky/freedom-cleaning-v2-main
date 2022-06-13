import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Fade.module.scss'
import Link from 'next/link'

const OvenCleaning = () => {
  return (
    <div>
      <Head>
        <title>Oven Cleaning</title>
      </Head>
      Oven Cleaning
      <Link href='/' aria-label='visit our home page'>
        <a>
          <button className={styles.button} aria-label='Home Page'>
            Homepage
          </button>
        </a>
      </Link>
    </div>
  )
}

export default OvenCleaning
