import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide' >
      <Head>
        <title>InstagramClone</title>
      </Head>
      
      <Header/>
      
      <Feed/>
      <Modal/>
    </div>
  )
}
