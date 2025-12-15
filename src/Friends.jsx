import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';

// Thinkers data structure - you'll add the actual doodle paths here
const thinkers = [
  {
    id: 1,
    name: "Albert Camus",
    doodle: "/doodles/camus.png",
    link: "https://plato.stanford.edu/entries/camus/"
  },
  {
    id: 2,
    name: "Buddha",
    doodle: "/doodles/buddha.png",
    link: "https://en.wikipedia.org/wiki/Gautama_Buddha"
  },
  {
    id: 3,
    name: "Friedrich Nietzsche",
    doodle: "/doodles/nietzsche.png",
    link: "https://plato.stanford.edu/entries/nietzsche/"
  },
  // {
  //   id: 4,
  //   name: "Adi Shankara",
  //   doodle: "/doodles/shankara.png",
  //   link: "https://plato.stanford.edu/entries/shankara/"
  // },
  {
    id: 4,
    name: "Fei-Fei Li",
    doodle: "/doodles/feifeili.png",
    link: "https://profiles.stanford.edu/fei-fei-li"
  },
  {
    id: 5,
    name: "Diogenes",
    doodle: "/doodles/diogenes.png",
    link: "https://en.wikipedia.org/wiki/diogenes"
  },
  {
    id: 6,
    name: "Kilian Weinberger",
    doodle: "/doodles/kilian.png",
    link: "https://www.cs.cornell.edu/~kilian/"
  },
  {
    id: 7,
    name: "Éva Tardos",
    doodle: "/doodles/tardos.png",
    link: "https://en.wikipedia.org/wiki/%C3%89va_Tardos"
  },
  {
    id: 8,
    name: "Keith Haring",
    doodle: "/doodles/haring.png",
    link: "https://www.artnet.com/artists/keith-haring/"
  },
  {
    id: 4,
    name: "Paul Graham",
    doodle: "/doodles/graham.png",
    link: "https://www.paulgraham.com/index.html"
  },
  // {
  //   id: 8,
  //   name: "Aiya",
  //   doodle: "/doodles/aiya.png",
  //   link: ""
  // },
  // {
  //   id: 9,
  //   name: "Jiddu Krishnamurti",
  //   doodle: "/doodles/krishnamurti.png",
  //   link: "https://en.wikipedia.org/wiki/Jiddu_Krishnamurti"
  // }
];

// Friends data structure - to be populated in next iteration
const friends = [
  // Will be added in next iteration
  {
    id: 1,
    name: "Nihaal Konda",
    doodle: "/doodles/nihaal.png",
    link: "https://www.linkedin.com/in/nihaalkonda/"
  },
  {
    id: 2,
    name: "Nick Channg",
    doodle: "/doodles/nick.png",
    link: "https://nickchanng.com/"
  },
  {
    id: 3,
    name: "Sujith Kakkireni",
    doodle: "/doodles/sujith.png",
    link: "https://www.linkedin.com/in/saisujith-kakkireni-791b752b1/"
  },
  
];

function Friends() {
  return (
    <div className="friends-container">
      <div className="friends-header">
        <h1>catalysts</h1>
        <Link to="/" className="back-link">back to home</Link>
      </div>

      {friends.length > 0 && (
        <div className="wall-section">
          <h2 className="wall-title">friends</h2>
          <div className="wall-grid">
            {friends.map(person => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      )}
            <div className="wall-section">
        <h2 className="wall-title">guides</h2>
        <div className="wall-grid">
          {thinkers.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>

      <div className="separator"></div>
      <p style={{ fontStyle: 'italic', fontSize: '0.8em' }}>doodles by me</p>
    </div>
  );
}

// PersonCard component for each doodle
function PersonCard({ person }) {
  const [showBubble, setShowBubble] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const isCamus = person.name === "Albert Camus";

  const handleClick = () => {
    if (person.link) {
      window.open(person.link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleMouseEnter = () => {
    if (isCamus) {
      // Set a timeout for 1.5 seconds
      hoverTimeoutRef.current = setTimeout(() => {
        setShowBubble(true);
      }, 1500);
    }
  };

  const handleMouseLeave = () => {
    if (isCamus) {
      // Clear the timeout if user stops hovering before 1.5s
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setShowBubble(false);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className={`person-card ${!person.link ? 'no-link' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="doodle-container">
        <img 
          src={person.doodle} 
          alt={`${person.name} doodle`} 
          className="doodle"
          onError={(e) => {
            // Fallback for missing images during development
            e.target.style.display = 'none';
          }}
        />
        {isCamus && showBubble && (
          <div className="speech-bubble">
            one must imagine sai happy
          </div>
        )}
      </div>
      <div className="person-name">{person.name}</div>
    </div>
  );
}

export default Friends;

