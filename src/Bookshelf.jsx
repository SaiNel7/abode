import { Link } from 'react-router-dom';
import './Bookshelf.css';
import Siddhartha from "../src/bookcovers/fav/siddhartha.jpg"

function Bookshelf() {
  // Mock data for book sections
  const favorites = [
    { id: 1, title: "Siddhartha", cover: Siddhartha },
    { id: 2, title: "The Alchemist", cover: "src/bookcovers/fav/thealchemist.jpg" },
    { id: 3, title: "Myth of Sisyphus", cover: "src/bookcovers/fav/mythofsisyphus.jpg" },
    { id: 4, title: "Norwegian Wood", cover: "src/bookcovers/fav/norwegianwood.jpg" },
    { id: 5, title: "Steve Jobs", cover: "src/bookcovers/fav/jobs.jpg" },
    { id: 6, title: "Life of Pi", cover: "src/bookcovers/fav/lifeofpi.jpg" },
    { id: 7, title: "Metamorphosis", cover: "src/bookcovers/fav/metamorph.jpg" },
    { id: 8, title: "The Stranger", cover: "src/bookcovers/fav/stranger.jpg" },
    { id: 9, title: "Crime and Punishment", cover: "src/bookcovers/fav/c&p.jpg" },
    { id: 10, title: "The Great Gatsby", cover: "src/bookcovers/fav/gatsby.jpg" },
    { id: 11, title: "Tintin in Tibet", cover: "src/bookcovers/fav/tintin.jpg" },
    { id: 12, title: "Naruto", cover: "src/bookcovers/fav/naruto.jpg" },
  ];

  const readingNow = [
    { id: 1, title: "Atomic Habits", cover: "src/bookcovers/curr/atomichabits.jpg" },
    { id: 2, title: "Great Expectations", cover: "src/bookcovers/curr/greatexpectations.jpg" },
    { id: 3, title: "Motorcycle Diaries", cover: "/src/bookcovers/curr/motorcyclediaries.jpeg" },
  ];

  const nextToRead = [
    { id: 1, title: "Love Poems", cover: "src/bookcovers/list/neruda.jpg" },
    { id: 2, title: "Algorithm Design", cover: "src/bookcovers/list/algorithms.jpg" },
    { id: 3, title: "Hackers and Painters", cover: "src/bookcovers/list/h&p.jpg" },
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