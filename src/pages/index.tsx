import { FAQ, Hero, PrivacyPolicy, Prizes, SectionFour, SectionThree, SectionTwo, Sponsors, TimeLine } from '@/components/Main/Main';
import Head from 'next/head'


// I have 3 tasks: 
//1.  Add animation to the Line component
// 2. Work on the stopwatch
// 3. Add shadow and stars


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
        <Prizes />
        <Sponsors />
        <PrivacyPolicy />
      </main>
    </>
   );
}
 
export default Home;