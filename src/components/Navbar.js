import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>MyPortfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <NavLink href="/" currentPath={router.pathname}>Home</NavLink>
          <NavLink href="/about" currentPath={router.pathname}>About</NavLink>
          <NavLink href="/projects" currentPath={router.pathname}>Projects</NavLink>
          <NavLink href="/contact" currentPath={router.pathname}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
          <MobileNavLink href="/" currentPath={router.pathname}>Home</MobileNavLink>
          <MobileNavLink href="/about" currentPath={router.pathname}>About</MobileNavLink>
          <MobileNavLink href="/projects" currentPath={router.pathname}>Projects</MobileNavLink>
          <MobileNavLink href="/contact" currentPath={router.pathname}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ href, currentPath, children }) => (
  <Link 
    href={href} 
    className={`${styles.navLink} ${currentPath === href ? styles.active : ''}`}
  >
    {children}
  </Link>
);

// Reusable MobileNavLink component
const MobileNavLink = ({ href, currentPath, children }) => (
  <Link 
    href={href} 
    className={`${styles.mobileLink} ${currentPath === href ? styles.active : ''}`}
  >
    {children}
  </Link>
);

export default Navbar;