import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Blog from './Blog.jsx';
import ScrollToTop from './ScrollToTop';
import Icarus from './assets/icarus.jpg';

function Home() {
  const words = ["Adventurer", "Dreamer", "Engineer", "Artist", "Writer", "Founder"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 75;
    const pauseBeforeDelete = 1500;
    const pauseBeforeNextWord = 500;
    
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          return;
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          return;
        }
      }
    };
    
    const timer = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : 
                   currentText.length === words[currentWordIndex].length ? pauseBeforeDelete : 
                   currentText.length === 0 ? pauseBeforeNextWord : typeSpeed
    );
    
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);
  
  return (
    <>
      {/* <div className="profile-image">
        <img src={Icarus} alt="Icarus painting" />
      </div> */}
      <div className="header-container">
        <h1>Sai Nellutla:</h1>
        <dynamic>{currentText}<span className="cursor">|</span></dynamic>
      </div>
      <div className="bio-section">
      New Delhi --{'>'} Doha --{'>'} Toronto --{'>'} Philly --{'>'} Noo Yawk --{'>'} Ithaca<br/><br/>
        Namaskāram! Welcome to my humble internet abode. I'm a student of life (currently at Cornell) who's intrigued by both hackers and painters. 
        <br/><br/>
        Shoot me an email at skn29 [at] cornell [dot] edu
      </div>
      <div className="two-column-layout">
        <div className="column">
          <h2>musings</h2>
          <ul className="links-list">
            <li><Link to="/blog">posts</Link></li>
            <li><a href="#">bookshelf</a></li>
          </ul>
        </div>
        
        <div className="column">
          <h2>projects</h2>
          <ul className="projects-list">
            <li><a href="https://prakriti-hack.netlify.app/">bumi</a></li>
            <li><a href="https://getparkr.netlify.app/">parkr</a></li>
            <li><a href="https://github.com/SaiNel7/focallus">focallus</a></li>
          </ul>
        </div>
        <div className="column">
          <h2>socials</h2>
          <ul className="socials-list">
            <li><a href="https://open.spotify.com/user/roaringhermit7?si=e1ad2e5d35c64fce">spotify</a></li>
            <li><a href="https://github.com/SaiNel7">github</a></li>
            <li><a href="https://www.linkedin.com/in/saikn/">linkedIn</a></li>
          </ul>
        </div>
        {/* <h2>The Wall</h2> */}
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component to handle scrolling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App;