import React, { useEffect, useState } from 'react';
import NavbarComp from '../common/NavbarComp';
import Logo from '../common/logo';
import './home.css';
import Footer from '../common/Footer';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://bl0gbackend.onrender.com/home");
        if (!response.ok) {
          throw new Error("failed to fetch the data");
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      }
      catch {
        console.log("error fetching blogs")
        setLoading(false)
      }
    }
    fetchBlogs();
  }, [])
  return (
    <>
      <div className="navbar-container">
        <Logo />
        <NavbarComp />
      </div>
      <div className="blog-image-grid">
        <div className="large-images">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Blog Image 1" />
          </div>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Blog Image 2" />
            <div className="text-overlay">
              <p>Start your blogging journey with productivity hacks.</p>
            </div>
          </div>
        </div>
        <div className="small-images">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Blog Image 3" />
            <div className="text-overlay">
              <p>Delicious recipes for foodies!</p>
            </div>
          </div>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Blog Image 4" />
            <div className="text-overlay">
              <p>Latest tech trends and gadgets to explore.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h1>The Latest</h1>
        <hr />
        <div className="row">
          {loading ? (
            <p>Loading .....</p>
          ) : blogs.length > 0 ? (
            blogs.slice(0, 3).map((blog, index) => (
              <div key={index} className='col-12 col-md-4 col-lg-4'>
                <div className="blog-card">
                  <img
                    src={blog.urlToImage || "https://via.placeholder.com/300"}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-author">By: {blog.author || "Unknown Author"}</p>
                    <p className="blog-description">
                      {blog.description || "No description available."}
                    </p>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs Found </p>
          )}
        </div>
      </div>
      <div className="container-fluid">
        <div className="articles-row">
          <div className="latest-articles">
            <h1>Latest Articles</h1>
            <hr />
            {loading ? (
              <p>Loading .....</p>
            ) : blogs.length > 0 ? (
              blogs.slice(3, 5).map((blog, index) => (
                <div key={index} className="blog-card">
                  <img
                    src={blog.urlToImage || "https://via.placeholder.com/300"}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-author">By: {blog.author || "Unknown Author"}</p>
                    <p className="blog-description">
                      {blog.description || "No description available."}
                    </p>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs Found</p>
            )}
          </div>
          <div className="top-stories">
            <h1>Top Stories</h1>
            <hr />
            {loading ? (
              <p>Loading .....</p>
            ) : blogs.length > 0 ? (
              blogs.slice(5, 7).map((blog, index) => (
                <div key={index} className="blog-card">
                  <img
                    src={blog.urlToImage || "https://via.placeholder.com/300"}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-author">By: {blog.author || "Unknown Author"}</p>
                    <p className="blog-description">
                      {blog.description || "No description available."}
                    </p>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs Found</p>
            )}
          </div>
        </div>
      </div>

      <div className="container-fluid">
      <h1>Latest Stories</h1>
      <hr />
        <div className="row">
        {loading ? (
            <p>Loading .....</p>
          ) : blogs.length > 0 ? (
            blogs.slice(7, 10).map((blog, index) => (
              <div key={index} className='col-12 col-md-4 col-lg-4'>
                <div className="blog-card">
                  <img
                    src={blog.urlToImage || "https://via.placeholder.com/300"}
                    alt={blog.title}
                    className="blog-image"
                  />
                  <div className="blog-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-author">By: {blog.author || "Unknown Author"}</p>
                    <p className="blog-description">
                      {blog.description || "No description available."}
                    </p>
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs Found </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
