import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const colors = ["info"];
  return (
    <>
      <h2 style={{ justifyContent: "center", textAlign: "center",marginBottom: '25px' }}>
        Blog Posts
      </h2>

      <div style={{ justifyContent: "center",  }}>
        {blogs.map((blog, index) => (
          <Card
            bg={colors[index % colors.length].toLowerCase()}
            
            key={blog.id}
            text={
              colors[index % colors.length].toLowerCase() === "light"
                ? "dark"
                : "white"
            }
            style={{ width: "50rem", 
            justifyContent: "center", 
            position: 'relative',
            top: '50%',
            left: '25%',
            marginBottom: '25px',
            
            className:'mb-2'}}
          >
            <Card.Header style={{color: "grey"}}><h4>Post - {index + 1}</h4> </Card.Header>
            <Link
              to={`/blog-details/${blog.id}`}
              style={{ textDecoration: "none", color: "black" , textAlign: "left"}}
            >
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
