import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Jogos</Navbar.Brand>
          <Nav className="me-auto">
          <Link className="nav-link" to="/jogos">Jogos</Link>
          <Link className="nav-link" to="/desenvolvedoras">Desenvolvedoras</Link>
          <Link className="nav-link" to="/editoras">Editoras</Link>
          <Link className="nav-link" to="/plataformas">Plataformas</Link>
          <Link className="nav-link" to="/generos">Gêneros</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu