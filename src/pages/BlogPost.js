import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { format } from 'date-fns';
import { getPostById } from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundPost = getPostById(id);
      setPost(foundPost);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <motion.div
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="loading-spinner"></div>
        <p>Loading post...</p>
      </motion.div>
    );
  }

  if (!post) {
    return (
      <motion.div
        className="error-container glass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="blog-post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <article className="blog-post glass">
        <header className="post-header">
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{format(post.date, 'MMM dd, yyyy')}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-author">
            <span className="author-name">By {post.author}</span>
          </div>
          <div className="post-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="post-content">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      <motion.div
        className="navigation-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/" className="nav-button glass">
          ← Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost; 