import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom"; //hook is used to jump from page to page

export default function Home() {

  const navigate = useNavigate(); //Hook for navigation

  const goToAddpage = () => { //Function that triggers navigate to the add item page
    navigate("/add");
  };

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <h1 className="mx-3"> Products</h1>
        <Button variant="success" onClick={goToAddpage}> 
          Add +
        </Button>
      </Container>
    </div>
  );
}