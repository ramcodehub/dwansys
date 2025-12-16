import React from 'react';
import CapabilitiesBanner from '../../components/CapabilitiesBanner/CapabilitiesBanner';
import Image from '../../assets/images/keybenefits.png';
import BlogCard from '../../components/BlogCard/BlogCard';
import blogs from '../../config/BlogData';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <CapabilitiesBanner
        heading="Our Blogs"
        content="Insights, updates, and technical articles"
        backgroundImage={Image}
      />

      <div className="blogs-container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.image}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
