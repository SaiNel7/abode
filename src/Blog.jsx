import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from './articles'; // Import articles from the articles directory
import './Blog.css';

function Blog() {
  const { slug } = useParams();
  const [currentView, setCurrentView] = useState('list');
  const [currentArticle, setCurrentArticle] = useState(null);
  const containerRef = useRef(null);
  
  // Effect to handle URL parameter changes and scroll position
  useEffect(() => {
    // First update the state based on the URL
    if (slug) {
      const article = blogPosts.find(post => post.slug === slug);
      if (article) {
        setCurrentArticle(article);
        setCurrentView('article');
      } else {
        setCurrentView('not-found');
      }
    } else {
      setCurrentView('list');
      setCurrentArticle(null);
    }
    
    // Handle scroll restoration with a slight delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Using 'auto' instead of 'smooth' for more immediate effect
      });
      
      // Additionally, if we have a container ref, ensure it's at the top
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    }, 10); // Small delay to ensure DOM updates

    return () => clearTimeout(timeoutId);
  }, [slug]); // Only re-run when slug changes

  // Article list view
  if (currentView === 'list') {
    return (
      <div className="blog-container" ref={containerRef}>
        <div className="blog-header">
          <h1>Posts</h1>
          <Link to="/" className="back-link">back to home</Link>
        </div>
        
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <Link to={`/blog/${post.slug}`} className="post-title">{post.title}</Link>
              <p className="post-date">{post.date}</p>
            </div>
          ))}
        </div>
        
        <div className="separator"></div>
        <p>there are no detours</p> 
      </div>
    );
  }
  
  // Article not found view
  if (currentView === 'not-found') {
    return (
      <div className="blog-container" ref={containerRef}>
        <div className="blog-header">
          <h1>article Not Found</h1>
          <Link to="/blog" className="back-link">back to writings</Link>
        </div>
        <p>the article you're looking for doesn't exist.</p>
        <div className="separator"></div>
      </div>
    );
  }
  
  // Individual article view
  return (
    <div className="blog-container" ref={containerRef}>
      <div className="blog-header">
        <h1>{currentArticle.title}</h1>
        <Link to="/blog" className="back-link">back to writings</Link>
      </div>
      <p className="article-date">{currentArticle.date}</p>
      <div 
        className="article-content"
        dangerouslySetInnerHTML={{ __html: currentArticle.content }}
      />
      <div className="separator"></div>
    </div>
  );
}

export default Blog;