import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Slider'
export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  )
}
