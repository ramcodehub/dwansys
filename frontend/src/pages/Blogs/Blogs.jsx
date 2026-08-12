import React from 'react';
import CapabilitiesBanner from '../../components/CapabilitiesBanner/CapabilitiesBanner';
import Image from '../../assets/images/keybenefits.png';
import BlogCard from '../../components/BlogCard/BlogCard';
import blogs from '../../config/BlogData';
import Subscribe from '../../components/Subscribe/Subscribe.jsx';

import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      {/* <CapabilitiesBanner
        heading="Our Blogs"
        content="Insights, updates, and technical articles"
        backgroundImage={Image}
      /> */}

      <div className="d-flex flex-column align-items-center justify-content-center" style={{height:'50dvh'}}>
      <h1 className="fw-bolder text-center">Blogs are coming soon!!!</h1>
        </div>

      {/* <div className="blogs-container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.image}
            date={blog.date}
            externalUrl={blog.externalUrl}
            openInNewTab={blog.openInNewTab}
          />
        ))}
      </div> */}
      <div className="bg-photo d-flex flex-column full-width">
        <Subscribe />
      </div>
    </div>
  );
};

export default Blogs;
