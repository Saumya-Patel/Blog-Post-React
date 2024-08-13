import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, updateBlog } from "../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const EditBlog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => selectBlogById(state, id));
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(String(blog.title));
  const [category, setCategory] = useState(blog.category);
  const [description, setDescription] = useState(blog.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      console.log(title);
      dispatch(updateBlog({ id, title, category, description }));
      navigate(`/blog-details/${id}`);
    }
  };

  return (
    <div>
      <Button
        type="button"
        bg="light"
        variant="dark"
        onClick={() => navigate(-2)}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
        }}
      >
        BACK
      </Button>
      <Card
        border="dark"
        text={"dark"}
        style={{
          width: "70rem",
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "15%",
          marginBottom: "25px",
          className: "mb-2",
        }}
      >
        <Card.Header>
          <h2 style={{ justifyContent: "center", textAlign: "center" }}>
            Edit Blog
          </h2>
        </Card.Header>

        <Card.Body>
          <div
            className="mx-auto col-12 col-lg-12"
            style={{
              width: "70rem",
              justifyContent: "center",
              position: "relative",
              top: "50%",
              left: "7%",
              marginBottom: "25px",

              className: "mb-2",
            }}
          >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="title">
                  <Form.Label><h4>Title</h4></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Title"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={title}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide title
                  </Form.Control.Feedback>
                </Form.Group>
                <br></br>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="category">
                  <Form.Label><h4>Category</h4></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={category}
                    placeholder="Enter category"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide category
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="10" controlId="description">
                  <Form.Label><h4>Content</h4></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide some content
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit" class="btn btn-success">Submit</Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditBlog;
{
}
