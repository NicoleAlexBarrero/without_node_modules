import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
const MainNav = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchField = e.target.elements.search.value;
    const query = `/artwork?title=true&q=${searchField}`;
    router.push(query);
  };
  return (
    <>
      <Navbar expand="md" className="fixed-top navbar-dark bg-primary">
        <Navbar.Brand>Nicole Barrero</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
              <Nav.Link>Advanced Search</Nav.Link>
            </Link>
            <Form className="d-flex nav-form" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                name="search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </>
  );
};

export default MainNav;
