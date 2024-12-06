import React, { useEffect, useState } from 'react'
import Logo from '../common/logo'
import NavbarComp from '../common/NavbarComp'
import Footer from '../common/Footer'
import './home.css'

const Fitness = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://bl0gbackend.onrender.com/fitness");
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
      <div className="container-fluid">
        <div className="articles-row">
          <div className="latest-articles">
            <h1>Fitness</h1>
            <hr />
            {loading ? (
              <p>Loading .....</p>
            ) : blogs.length > 0 ? (
              blogs.slice(0, 8).map((blog, index) => (
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
              blogs.slice(8, 16).map((blog, index) => (
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
      <Footer />
    </>

  )
}

export default Fitness