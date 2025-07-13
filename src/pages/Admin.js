import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Admin.css';

const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Development',
    tags: '',
    featured: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Development',
    'Technology',
    'Design',
    'Business',
    'Lifestyle',
    'Science',
    'Education'
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real app, this would save to a database
    const newPost = {
      id: Date.now(), // Simple ID generation
      ...formData,
      date: new Date(),
      readTime: `${Math.ceil(formData.content.split(' ').length / 200)} min read`,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    console.log('New post created:', newPost);
    
    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: 'Development',
      tags: '',
      featured: false
    });

    setIsSubmitting(false);
    alert('Post created successfully! (This is a demo - posts are not actually saved)');
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        className="admin-login-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="admin-login-container glass">
          <h1>Admin Access</h1>
          <p>Enter password to access admin panel</p>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="form-input"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </form>
          
          <motion.button
            onClick={() => navigate('/')}
            className="btn btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="admin-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="admin-container glass">
        <header className="admin-header">
          <h1>Admin Panel</h1>
          <p>Create and manage your blog posts</p>
        </header>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your post title..."
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Brief description of your post..."
              rows="3"
              className="form-textarea"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">Author *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name..."
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Enter tags separated by commas..."
              className="form-input"
            />
            <small className="form-help">Separate tags with commas (e.g., React, JavaScript, Web Development)</small>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="form-checkbox"
              />
              Featured Post
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your post content here... You can use Markdown formatting."
              rows="20"
              required
              className="form-textarea"
            />
            <small className="form-help">
              Supports Markdown formatting. Use **bold**, *italic*, `code`, ## headings, and ```code blocks```.
            </small>
          </div>

          <div className="form-actions">
            <motion.button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Admin; 