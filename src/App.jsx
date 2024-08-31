// src/App.jsx
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Work from './components/Work';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <main className='font-light text-white antialiased selection:bg-lime-300 selection:text-black bg-black' >
          <Navbar />
          <Hero />
          <Marquee />
          <Projects />
          <About />
          <Work />
          <Contact />
        </main>
      )}
    </>
  );
};

export default App;
