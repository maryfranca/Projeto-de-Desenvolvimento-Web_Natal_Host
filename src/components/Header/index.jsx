import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = produto.filter(item => {
      return item.nome.toLowerCase().includes(term.toLowerCase());
    });

    setSearchResults(results);
  }

  return (
    <header className={styles.header}>
      <Link to="/">
        <span className="header span">NATAL</span>
      </Link>

      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Form className={`d-flex ${styles.searchForm}`}>
                <FormControl
                  type="search"
                  placeholder="Pesquisar"
                  className={styles.searchBar}
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form>
              <Nav.Link href="/decoracao">Decoração</Nav.Link>
              <Nav.Link href="/iluminacao">Iluminação</Nav.Link>
              <Nav.Link href="/enfeites">Enfeites Natalinos</Nav.Link>
              <Nav.Link href="/carrinho"><img src="/car.png" alt="Carrinho" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
