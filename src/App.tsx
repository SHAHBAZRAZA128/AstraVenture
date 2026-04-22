import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Stack from './components/Stack';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-offwhite text-navy font-sans antialiased selection:bg-copper/20">
      <Navigation />
      <main>
        <Hero />
        <Thesis />
        <Stack />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
