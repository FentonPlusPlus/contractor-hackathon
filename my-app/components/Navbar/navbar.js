import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

function Navbar() {
  return (
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
    </nav>
  );
};

export default Navbar
