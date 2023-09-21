import { FAQ, Hero, SectionFour, SectionThree, SectionTwo, TimeLine } from '@/components/Main/Main';
import Head from 'next/head'

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
        <SectionThree />
        <SectionFour />
        <FAQ />
        <TimeLine />
      </main>
    </>
   );
}
 
export default Home;