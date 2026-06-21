import { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Manifesto from './components/Manifesto/Manifesto';
import MorningRitual from './components/MorningRitual/MorningRitual';
import SignatureCoffee from './components/SignatureCoffee/SignatureCoffee';
import SeasonalPastries from './components/SeasonalPastries/SeasonalPastries';
import TheBakery from './components/TheBakery/TheBakery';
import TheStudio from './components/TheStudio/TheStudio';
import Gallery from './components/Gallery/Gallery';
import Journal from './components/Journal/Journal';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import useLenis from './hooks/useLenis';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div className={`app ${isLoading ? 'app--loading' : 'app--loaded'}`}>
        <Navigation />
        <main>
          <Hero />
          <Manifesto />
          <MorningRitual />
          <SignatureCoffee />
          <SeasonalPastries />
          <TheBakery />
          <TheStudio />
          <Gallery />
          <Journal />
          <Reservation />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
