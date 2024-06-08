import './Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Contact from '../../sections/Contact/Contact';
import Footer from '../../sections/Footer/Footer';
import Hero from '../../sections/Hero/Hero';
import Projects from '../../sections/Projects/Projects';
import Skills from '../../sections/Skills/Skills';
import findmeicon from '../../assets/findmeicon.png';
import { useNavigate } from 'react-router-dom';

function Home() {
 
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/findme');
  };

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <img
        src={findmeicon}
        alt="Book Now"
        className="book-now-icon"
        onClick={handleBookNowClick}
      />
      <Footer />
    </>
  );
}

export default Home;
