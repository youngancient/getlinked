import { Hero, SectionTwo } from '@/components/Main/Main';
import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return ( 
    <>
      <Head>
        <title>getlinked</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <SectionTwo />
      </main>
    </>
   );
}
 
export default Home;