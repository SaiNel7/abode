import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Blog from './Blog.jsx';
import Bookshelf from './Bookshelf.jsx';
import Friends from './Friends.jsx';
import ScrollToTop from './ScrollToTop';
import Icarus from './assets/icarus.jpg';

function Home() {
  const words = ["Engineer", "Optimist", "Tinkerer", "Writer", "Artist"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseBeforeDelete = 1000;
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
      </div>  */}
      <div className="header-container">
        <h1>Sai Nellutla:</h1>
        <dynamic>{currentText}<span className="cursor">|</span></dynamic>
      </div>
      <div className="bio-section">
      New Delhi --{'>'} Doha --{'>'} Toronto --{'>'} Philly --{'>'} Noo Yawk --{'>'} Ithaca<br/><br/>
        Hi! Welcome to the gallery of me. I'm a student of life (currently at Cornell) intrigued by both hackers and painters. I love everything philosophy, art, and computer science.
        <br/><br/>
        Shoot me an email at skn29 [at] cornell [dot] edu
      </div>
      <div className="two-column-layout">
        <div className="column">
          <h2>musings</h2>
          <ul className="links-list">
            <li><Link to="/blog">posts</Link></li>
            <li><Link to="/bookshelf">bookshelf</Link></li>
            <li><Link to="/friends">catalysts</Link></li>
          </ul>
        </div>
        
        <div className="column">
          <h2>projects</h2>
          <ul className="projects-list">
            <li><a href="https://prakriti-hack.netlify.app/">prakriti</a></li>
            <li><a href="https://getparkr.netlify.app/">parkr</a></li>
            <li><a href="https://socratic1100.netlify.app/">socratic</a></li>
            <li><a href="https://svtsrideshare.netlify.app/">svts-rideshare</a></li>
            <li><a href="https://github.com/SaiNel7/focallus">focallus</a></li>
          </ul>
        </div>
        <div className="column">
          <h2>socials</h2>
          <ul className="socials-list">
            {/* <li><a href="https://open.spotify.com/user/roaringhermit7?si=e1ad2e5d35c64fce">spotify</a></li> */}
            <li><a href="https://github.com/SaiNel7">github</a></li>
            <li><a href="https://www.linkedin.com/in/saikn/">linkedIn</a></li>
            <li><a href="https://medium.com/@skn29">medium</a></li> 
          </ul>
        </div>
        {/* <h2>The Wall</h2> */}
      </div>
    </>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Start fade-out after 1.8 seconds
    const fadeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // Remove loader from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
          <img src="/lotus.png" alt="Loading" className="lotus-loader" />
        </div>
      )}
      <div className={`main-content ${!isLoading ? 'fade-in' : ''}`}>
        <Router>
          <ScrollToTop />
          <RedirectHandler />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;

function RedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const pending = sessionStorage.getItem('redirect-path');
    if (pending) {
      sessionStorage.removeItem('redirect-path');
      navigate(pending, { replace: true });
    }
  }, [navigate]);
  return null;
}