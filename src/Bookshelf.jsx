import { Link } from 'react-router-dom';
import './Bookshelf.css';

function Bookshelf() {
  return (
    <div className="bookshelf-container">
      <div className="bookshelf-header">
        <h1>Bookshelf</h1>
        <Link to="/" className="back-link">back to home</Link>
      </div>
      
      <div className="coming-soon">
        <p>coming soon</p>
      </div>
      
      <div className="separator"></div>
    </div>
  );
}

export default Bookshelf;