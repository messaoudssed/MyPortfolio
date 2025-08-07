import Link from 'next/link';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.about}>
            <h3>MyPortfolio</h3>
            <p>
              A showcase of my work, skills, and professional journey as a web developer.
            </p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.social}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <Link href="https://github.com" target="_blank">GitHub</Link>
              <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
              <Link href="https://twitter.com" target="_blank">Twitter</Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} MyPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
