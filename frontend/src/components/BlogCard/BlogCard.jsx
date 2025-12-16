import './BlogCard.css';
import { Link } from 'react-router-dom';

export default function BlogCard({id,title,excerpt,date,image}) {
  return (
    <Link
      to={`/blogs/${id}`}
      className="blog-card-link"
    >
      <div className="blog-card">
        <div className="top">
          <img src={image} alt="Blog" />
        </div>

        <div className="bottom d-flex flex-column gap-2">
          <h3 className="blog-heading fw-bold m-0 p-0 ">
            {title}
          </h3>
          <p className='m-0 p-0 lh-1'> 
            {excerpt}
          </p>

          <div className="blog-date">
            {date}
          </div>

          {/* <div>
            <span className="primaryBtn bg-black text-decoration-none ps-1 d-flex gap-3 align-items-center">
              Read More
              <i className="bi bi-arrow-right text-white" aria-hidden="true"></i>
            </span>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
