import React from 'react';
import './BlogDetail.css';
import { useParams } from 'react-router-dom';
import blogs from '../../config/BlogData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <article className="blog-detail d-flex flex-column justify-content-center px-5">
      <img src={blog.image} alt={blog.title} />

      <div className='d-flex align-items-center justify-content-between py-3'>
        <h1 className='fw-bold m-0 p-0 lh-0'>{blog.title}</h1>

        <div className="share-links">
          <a href="">WhatsApp</a>
          <a href="">LinkedIn</a>
          <a href="">Twitter</a>
      </div>
      </div>

      <div className="content ">
        <p>{blog.content}</p>
      </div>
    </article>
  );
};

export default BlogDetail;
