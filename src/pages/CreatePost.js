import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CreatePost.css';

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Development',
    tags: ''
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('New post created:', formData);
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  const isFormValid = formData.title && formData.content && formData.author;

  return (
    <motion.div
      className="create-post-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="create-post-container glass">
        <header className="create-post-header">
          <h1>Create New Post</h1>
          <p>Share your thoughts and knowledge with the community</p>
        </header>

        <form onSubmit={handleSubmit} className="create-post-form">
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
            <label htmlFor="content">Content *</label>
            <div className="markdown-editor">
              <div className="markdown-toolbar">
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('content');
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const selection = text.substring(start, end);
                    const after = text.substring(end);
                    
                    setFormData(prev => ({
                      ...prev,
                      content: before + '**' + selection + '**' + after
                    }));
                  }}
                  className="toolbar-btn"
                  title="Bold"
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('content');
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const selection = text.substring(start, end);
                    const after = text.substring(end);
                    
                    setFormData(prev => ({
                      ...prev,
                      content: before + '*' + selection + '*' + after
                    }));
                  }}
                  className="toolbar-btn"
                  title="Italic"
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('content');
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const selection = text.substring(start, end);
                    const after = text.substring(end);
                    
                    setFormData(prev => ({
                      ...prev,
                      content: before + '`' + selection + '`' + after
                    }));
                  }}
                  className="toolbar-btn"
                  title="Code"
                >
                  &lt;/&gt;
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('content');
                    const start = textarea.selectionStart;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const after = text.substring(start);
                    
                    setFormData(prev => ({
                      ...prev,
                      content: before + '\n## ' + after
                    }));
                  }}
                  className="toolbar-btn"
                  title="Heading"
                >
                  H
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const textarea = document.getElementById('content');
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const text = textarea.value;
                    const before = text.substring(0, start);
                    const selection = text.substring(start, end);
                    const after = text.substring(end);
                    
                    setFormData(prev => ({
                      ...prev,
                      content: before + '```\n' + selection + '\n```' + after
                    }));
                  }}
                  className="toolbar-btn"
                  title="Code Block"
                >
                  { }
                </button>
              </div>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your post content here... You can use Markdown formatting."
                rows="20"
                required
                className="form-textarea markdown-textarea"
              />
            </div>
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
              disabled={!isFormValid || isSubmitting}
              className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
              whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
              whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CreatePost; 