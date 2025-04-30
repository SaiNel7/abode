import { Link } from 'react-router-dom';
import './Bookshelf.css';
import Siddhartha from "../src/bookcovers/fav/siddhartha.jpg"
import TheAlchemist from "../src/bookcovers/fav/thealchemist.jpg"
import MythOfSisyphus from "../src/bookcovers/fav/mythofsisyphus.jpg"
import NorwegianWood from "../src/bookcovers/fav/norwegianwood.jpg"
import SteveJobs from "../src/bookcovers/fav/jobs.jpg"
import Pi from "../src/bookcovers/fav/lifeofpi.jpg"
import Kafka from "../src/bookcovers/fav/metamorph.jpg"
import Stranger from "../src/bookcovers/fav/stranger.jpg" 
import CP from "../src/bookcovers/fav/c&p.jpg"
import Gatsby from "../src/bookcovers/fav/gatsby.jpg"
import Tintin from "../src/bookcovers/fav/tintin.jpg"
import Naruto from "../src/bookcovers/fav/naruto.jpg"

import AtomicHabits from "../src/bookcovers/curr/atomichabits.jpg"
import GE from "../src/bookcovers/curr/greatexpectations.jpg"
import MD from "../src/bookcovers/curr/motorcyclediaries.jpeg"

import Neruda from "../src/bookcovers/list/neruda.jpg"
import Algo from "../src/bookcovers/list/algorithms.jpg"
import HackersPainters from "../src/bookcovers/list/h&p.jpg"
function Bookshelf() {
  // Mock data for book sections
  const favorites = [
    { id: 1, title: "Siddhartha", cover: Siddhartha },
    { id: 2, title: "The Alchemist", cover: TheAlchemist },
    { id: 3, title: "Myth of Sisyphus", cover: MythOfSisyphus },
    { id: 4, title: "Norwegian Wood", cover: NorwegianWood },
    { id: 5, title: "Steve Jobs", cover: SteveJobs },
    { id: 6, title: "Life of Pi", cover: Pi },
    { id: 7, title: "Metamorphosis", cover: Kafka },
    { id: 8, title: "The Stranger", cover: Stranger },
    { id: 9, title: "Crime and Punishment", cover: CP },
    { id: 10, title: "The Great Gatsby", cover: Gatsby },
    { id: 11, title: "Tintin in Tibet", cover: Tintin },
    { id: 12, title: "Naruto", cover: Naruto },
  ];

  const readingNow = [
    { id: 1, title: "Atomic Habits", cover: AtomicHabits },
    { id: 2, title: "Great Expectations", cover: GE },
    { id: 3, title: "Motorcycle Diaries", cover: MD },
  ];

  const nextToRead = [
    { id: 1, title: "Love Poems", cover: Neruda },
    { id: 2, title: "Algorithm Design", cover: Algo },
    { id: 3, title: "Hackers and Painters", cover: HackersPainters },
    // { id: 4, title: "Next Book 4", cover: "/api/placeholder/150/225" },
    // { id: 5, title: "Next Book 5", cover: "/api/placeholder/150/225" },
    // { id: 6, title: "Next Book 6", cover: "/api/placeholder/150/225" },
  ];

  return (
    <div className="bookshelf-container">
      <div className="bookshelf-header">
        <h1>Bookshelf</h1>
        <Link to="/" className="back-link">back to home</Link>
      </div>
      
      <BookSection title="Favorites" books={favorites} />
      <BookSection title="Reading Now" books={readingNow} />
      <BookSection title="Next to Read" books={nextToRead} />
    </div>
  );
}

// BookSection component to display each section with its books
function BookSection({ title, books }) {
  return (
    <div className="book-section">
      <h2 className="section-title">{title}</h2>
      <div className="book-grid">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <div className="book-cover">
              <img src={book.cover} alt={`Cover of ${book.title}`} />
            </div>
            <div className="book-title">{book.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;