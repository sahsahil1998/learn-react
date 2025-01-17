import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import List from './components/list_keys'

export default function Home() {
  return (
    <div className={styles.main}>
        <List />
    </div>
  )
}
