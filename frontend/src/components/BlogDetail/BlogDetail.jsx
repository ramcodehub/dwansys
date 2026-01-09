import React, { useEffect } from "react";
import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import blogs from "../../config/BlogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  const shareUrl = window.location.href;
  const shareText = blog.title;

  useEffect(() => {
    document.title = blog.title;

    const setMeta = (attr, value, name = "property") => {
      let tag = document.querySelector(`meta[${name}="${attr}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(name, attr);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    // Open Graph
    setMeta("og:title", blog.title);
    setMeta("og:description", blog.excerpt);
    setMeta("og:image", blog.image);
    setMeta("og:url", shareUrl);
    setMeta("og:type", "article");

    // Twitter
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", blog.title, "name");
    setMeta("twitter:description", blog.excerpt, "name");
    setMeta("twitter:image", blog.image, "name");
  }, [blog, shareUrl]);

  return (
    <article className="blog-detail d-flex flex-column justify-content-center px-5">
      <img src={blog.image} alt={blog.title} />

      <div className="d-flex align-items-center justify-content-between py-3">
        <h1 className="fw-bold m-0 p-0 lh-0">{blog.title}</h1>

        <div className="share-links d-flex gap-3">
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              `${shareText} - ${shareUrl}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              shareText
            )}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>

      <div className="content">
        <p>{blog.content}</p>
      </div>
    </article>
  );
};

export default BlogDetail;
