import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { getAllPosts, searchPosts, getPostsByCategory } from '../data/blogPosts';
import './Home.css';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
    setFilteredPosts(allPosts);
  }, []);

  useEffect(() => {
    let filtered = posts;
    if (searchTerm) {
      filtered = searchPosts(searchTerm);
    }
    if (selectedCategory !== 'all') {
      filtered = getPostsByCategory(selectedCategory);
    }
    if (searchTerm && selectedCategory !== 'all') {
      const searchResults = searchPosts(searchTerm);
      filtered = searchResults.filter(post => post.category === selectedCategory);
    }
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const categories = ['all', ...new Set(posts.map(post => post.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home-page olive-bg">
      {/* Hero Section */}
      <section className="olive-hero-section">
        <div className="olive-hero-left">
          <div className="olive-hero-brand">Day, Night, Life</div>
          <h1 className="olive-hero-title">SIMPLE<br/>LIVING</h1>
          <p className="olive-hero-subtitle">
            Join us on a journey to mindfulness and sustainability. Discover tips, stories, and resources to enrich your eco-friendly lifestyle.
          </p>
          <Link to="#posts" className="olive-hero-btn">Explore More</Link>
        </div>
        <div className="olive-hero-right">
          <img src={HERO_IMAGE} alt="Earthy decor" className="olive-hero-img" />
        </div>
      </section>

      {/* Blog List Section */}
      <motion.div
        className="search-filter-section glass"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-container">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div
        className="posts-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="posts"
      >
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="post-card glass"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="post-header">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{format(post.date, 'MMM dd, yyyy')}</span>
              </div>
              <span className="read-time">{post.readTime}</span>
            </div>
            <Link to={`/post/${post.id}`} className="post-link">
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-footer">
              <div className="post-author">
                <span className="author-name">By {post.author}</span>
              </div>
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
      {filteredPosts.length === 0 && (
        <motion.div
          className="no-posts glass"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>No posts found</h3>
          <p>Try adjusting your search terms or category filter.</p>
        </motion.div>
      )}
    </div>
  );
};

export default Home; 