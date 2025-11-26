import { Link } from 'react-router-dom';
import './Friends.css';

// Thinkers data structure - you'll add the actual doodle paths here
const thinkers = [
  {
    id: 1,
    name: "Albert Camus",
    doodle: "/doodles/camus.png",
    link: "https://en.wikipedia.org/wiki/Albert_Camus"
  },
  {
    id: 2,
    name: "Friedrich Nietzsche",
    doodle: "/doodles/nietzsche.png",
    link: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche"
  },
  {
    id: 3,
    name: "Adi Shankara",
    doodle: "/doodles/shankara.png",
    link: "https://en.wikipedia.org/wiki/Adi_Shankara"
  },
  {
    id: 4,
    name: "Diogenes the Cynic",
    doodle: "/doodles/diogenes.png",
    link: "https://en.wikipedia.org/wiki/diogenes"
  },
  {
    id: 5,
    name: "Buddha",
    doodle: "/doodles/buddha.png",
    link: "https://en.wikipedia.org/wiki/Gautama_Buddha"
  },
  {
    id: 6,
    name: "Kilian Weinberger",
    doodle: "/doodles/kilian.png",
    link: "https://www.cs.cornell.edu/~kilian/"
  },
  // {
  //   id: 7,
  //   name: "Éva Tardos",
  //   doodle: "/doodles/tardos.png",
  //   link: "https://en.wikipedia.org/wiki/%C3%89va_Tardos"
  // },
  // {
  //   id: 8,
  //   name: "Haran Aiya",
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
];

function Friends() {
  return (
    <div className="friends-container">
      <div className="friends-header">
        <h1>friends</h1>
        <Link to="/" className="back-link">back to home</Link>
      </div>
      
      <div className="wall-section">
        <h2 className="wall-title">thought mentors</h2>
        <div className="wall-grid">
          {thinkers.map(person => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </div>

      {friends.length > 0 && (
        <div className="wall-section">
          <h2 className="wall-title">Friends</h2>
          <div className="wall-grid">
            {friends.map(person => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// PersonCard component for each doodle
function PersonCard({ person }) {
  const handleClick = () => {
    window.open(person.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="person-card" onClick={handleClick}>
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
      </div>
      <div className="person-name">{person.name}</div>
    </div>
  );
}

export default Friends;

