import Head from 'next/head'
import Navbar from '../components/Navbar.jsx'
import Main from '../components/Main.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>david-bounliane.dev</title>
        <meta name="description" content="portfolio of David Bounliane, software engineer student at UTT, France." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Contact/>
      <Footer />
    </div>

  )
}
