import React from 'react';
import './BlogDetail.css';
import { useParams } from 'react-router-dom';
import blogs from '../../config/BlogData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <article className="blog-detail">
      {/* Image */}
      <img src={blog.image} alt={blog.title} />

      {/* Title */}
      <h1>{blog.title}</h1>

      {/* Share links */}
      <div className="share-links">
        <a href="">WhatsApp</a>
        <a href="">LinkedIn</a>
        <a href="">Twitter</a>
      </div>

      {/* Content */}
      <div className="content">
        <p>{blog.content}</p>
      </div>
    </article>
  );
};

export default BlogDetail;
