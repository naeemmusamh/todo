import { Navbar } from "react-bootstrap";

export default function Header()  {
  return (
    <Navbar className="header-bar" bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Home</Navbar.Brand>
    </Navbar>
  );
};