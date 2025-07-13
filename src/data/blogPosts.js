// Blog posts data - This would typically come from a CMS or database
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Development",
    excerpt: "Learn the fundamentals of React and build your first interactive application with modern JavaScript techniques.",
    content: `
# Getting Started with React Development

React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamentals of React and learn how to build your first interactive application.

## What is React?

React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer and can be used for developing both web and mobile applications.

## Key Features

- **Component-Based**: Everything in React is a component
- **Virtual DOM**: Efficient rendering and updates
- **JSX**: JavaScript XML for writing components
- **Unidirectional Data Flow**: Predictable state management

## Setting Up Your First React App

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Creating Your First Component

\`\`\`jsx
import React from 'react';

function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React component.</p>
    </div>
  );
}

export default Welcome;
\`\`\`

## State Management

React components can have state, which allows them to be interactive:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Best Practices

1. **Keep components small and focused**
2. **Use meaningful names for props and state**
3. **Implement proper error boundaries**
4. **Optimize performance with React.memo**

## Conclusion

React provides a powerful and flexible way to build modern web applications. With its component-based architecture and rich ecosystem, you can create complex applications with clean, maintainable code.

Start building with React today and discover the endless possibilities!
    `,
    author: "John Doe",
    date: new Date('2024-01-15'),
    category: "Development",
    readTime: "5 min read",
    tags: ["React", "JavaScript", "Frontend"],
    featured: true
  },
  {
    id: 2,
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the future of web development and user experience.",
    content: `
# The Future of Web Development

The web development landscape is constantly evolving, bringing new technologies and methodologies that shape how we build and deploy applications.

## Emerging Trends

### 1. WebAssembly (WASM)
WebAssembly is revolutionizing web performance by allowing code written in languages like C++ and Rust to run in the browser at near-native speeds.

### 2. Progressive Web Apps (PWAs)
PWAs combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences.

### 3. Serverless Architecture
Serverless computing is changing how we deploy and scale applications, reducing infrastructure management overhead.

## Modern Development Tools

- **Vite**: Lightning-fast build tool
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js**: Full-stack React framework

## The Role of AI in Development

Artificial Intelligence is becoming increasingly important in web development:

- **Code Generation**: AI-powered code completion
- **Testing**: Automated test generation
- **Performance**: Intelligent optimization
- **Accessibility**: Automated accessibility checks

## Conclusion

The future of web development is exciting and full of possibilities. Stay updated with the latest trends and technologies to remain competitive in this ever-evolving field.
    `,
    author: "Jane Smith",
    date: new Date('2024-01-10'),
    category: "Technology",
    readTime: "8 min read",
    tags: ["Web Development", "Trends", "UX"],
    featured: true
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques that will transform your web design skills.",
    content: `
# Mastering CSS Grid and Flexbox

CSS Grid and Flexbox have changed the way we approach layouts in web development. These powerful layout systems provide unprecedented control over how elements are positioned and sized.

## CSS Grid

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns.

### Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

### Grid Areas

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## CSS Flexbox

Flexbox is a one-dimensional layout method for arranging items in rows or columns.

### Flex Container

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
\`\`\`

### Flex Items

\`\`\`css
.flex-item {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}
\`\`\`

## When to Use Each

- **Use Grid for**: Two-dimensional layouts, complex page structures
- **Use Flexbox for**: One-dimensional layouts, component alignment

## Best Practices

1. Start with mobile-first design
2. Use semantic HTML structure
3. Test across different screen sizes
4. Consider accessibility implications

## Conclusion

Mastering CSS Grid and Flexbox will significantly improve your layout capabilities and create more responsive, maintainable designs.
    `,
    author: "Mike Johnson",
    date: new Date('2024-01-05'),
    category: "Design",
    readTime: "12 min read",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    featured: false
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to design and implement robust, scalable APIs using Node.js and Express framework.",
    content: `
# Building Scalable APIs with Node.js

Node.js has become the go-to platform for building fast, scalable APIs. In this guide, we'll explore best practices for creating robust backend services.

## Why Node.js for APIs?

- **Event-driven architecture**: Handles concurrent requests efficiently
- **JavaScript everywhere**: Same language for frontend and backend
- **Rich ecosystem**: Extensive package library
- **Fast development**: Rapid prototyping and iteration

## Setting Up Your Project

\`\`\`bash
mkdir my-api
cd my-api
npm init -y
npm install express cors helmet morgan
\`\`\`

## Basic Express Server

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## API Design Principles

1. **RESTful conventions**: Use proper HTTP methods
2. **Consistent naming**: Follow naming conventions
3. **Error handling**: Proper error responses
4. **Documentation**: Clear API documentation

## Security Best Practices

- **Input validation**: Validate all inputs
- **Authentication**: Implement proper auth
- **Rate limiting**: Prevent abuse
- **HTTPS**: Always use secure connections

## Conclusion

Node.js provides an excellent foundation for building scalable APIs. Follow these practices to create robust, maintainable services.
    `,
    author: "Sarah Wilson",
    date: new Date('2024-01-20'),
    category: "Development",
    readTime: "10 min read",
    tags: ["Node.js", "API", "Backend", "Express"],
    featured: true
  },
  {
    id: 5,
    title: "The Art of User Experience Design",
    excerpt: "Discover the principles and techniques that make digital products truly user-friendly and engaging.",
    content: `
# The Art of User Experience Design

User Experience (UX) design is more than just making things look pretty. It's about creating meaningful, accessible, and delightful experiences for users.

## What is UX Design?

UX design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product.

## Core Principles

### 1. User-Centered Design
Always design with the user in mind. Understand their needs, goals, and pain points.

### 2. Accessibility
Design for everyone, including users with disabilities. Follow WCAG guidelines.

### 3. Consistency
Maintain consistent patterns and behaviors throughout your product.

### 4. Simplicity
Remove unnecessary complexity. Less is often more.

## The Design Process

1. **Research**: Understand your users and their needs
2. **Ideation**: Generate ideas and solutions
3. **Prototyping**: Create interactive prototypes
4. **Testing**: Validate with real users
5. **Implementation**: Build and launch

## Tools and Techniques

- **User Research**: Interviews, surveys, analytics
- **Wireframing**: Sketch, Figma, Adobe XD
- **Prototyping**: InVision, Framer, Principle
- **Testing**: Usability testing, A/B testing

## Measuring Success

- **User satisfaction**: Surveys and feedback
- **Task completion**: Success rates and time
- **Engagement**: Time spent, return visits
- **Business metrics**: Conversions, retention

## Conclusion

Great UX design is invisible to users but makes all the difference in their experience. Focus on understanding and serving your users' needs.
    `,
    author: "Alex Chen",
    date: new Date('2024-01-25'),
    category: "Design",
    readTime: "7 min read",
    tags: ["UX", "Design", "User Research", "Prototyping"],
    featured: false
  }
];

// Helper function to get all posts
export const getAllPosts = () => blogPosts;

// Helper function to get a single post by ID
export const getPostById = (id) => blogPosts.find(post => post.id === parseInt(id));

// Helper function to get featured posts
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

// Helper function to get posts by category
export const getPostsByCategory = (category) => blogPosts.filter(post => post.category === category);

// Helper function to search posts
export const searchPosts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}; 