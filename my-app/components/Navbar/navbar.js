import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">The Contractor</Navbar.Brand>
          <Nav className="me-auto">
            <Link href="/board">Contract Board</Link>
            <Link href="/add-contract">Add A Contract</Link>
            <Link href="/candidates">Candidates</Link>
            <Link href="/add-candidate">Add A Candidate</Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

/* 
<nav className={styles.navbar}>
      <ul className={styles.navbarNav}>
        <li className={styles.navItem}>
          <Link href="/">
            <p className={styles.navLink}>Home</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/board">
            <p className={styles.navLink}>Contract Board</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/add-contract">
            <p className={styles.navLink}>Add a Contract</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/add-candidate">
            <p className={styles.navLink}>Add a Candidate</p>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/candidates">
            <p className={styles.navLink}>All Candidates</p>
          </Link>
        </li>
      </ul>
    </nav> */
export default NavbarComponent;
