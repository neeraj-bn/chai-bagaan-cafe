import AnnouncementStrip from './components/AnnouncementStrip'
import Header from './components/Header'
import Hero from './components/Hero'
import DaypartStrip from './components/DaypartStrip'
import FeaturedMenu from './components/FeaturedMenu'
import Menu from './components/Menu'
import FoodStrip from './components/FoodStrip'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <>
      <SmoothScroll />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-espresso focus:px-4 focus:py-2 focus:text-offwhite"
      >
        Skip to content
      </a>
      <AnnouncementStrip />
      <Header />
      <main id="main">
        <Hero />
        <DaypartStrip />
        <FeaturedMenu />
        <Menu />
        <FoodStrip />
        <Story />
        <Gallery />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
