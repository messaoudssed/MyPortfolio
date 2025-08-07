import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../src/components/Navbar.js'; // Adjust path as needed
import Footer from '../src/components/Footer'; // Adjust path as needed

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio | Home</title>
        <meta name="description" content="Professional portfolio showcasing my skills and projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar/>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Hi, I'm <span>HAFAYED Messaoud</span>
            </h1>
            <p className={styles.subtitle}>Frontend Developer | UI Specialist</p>
          </div>
          
          <div className={styles.profile}>
            <Image
              src="/images/01.png"
              alt="Profile Picture"
              width={250}
              height={250}
              className={styles.profileImage}
              priority
            />
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={styles.linksSection}>
          <h2 className={styles.sectionTitle}>Explore My Portfolio</h2>
          <div className={styles.grid}>
            <Link href="/about" className={styles.card}>
              <div className={styles.cardContent}>
                <h2>About Me <span>&rarr;</span></h2>
                <p>Learn more about my skills, experience, and education</p>
              </div>
            </Link>

            <Link href="/projects" className={styles.card}>
              <div className={styles.cardContent}>
                <h2>Projects <span>&rarr;</span></h2>
                <p>View my recent work and detailed case studies</p>
              </div>
            </Link>

            <Link href="/contact" className={styles.card}>
              <div className={styles.cardContent}>
                <h2>Contact <span>&rarr;</span></h2>
                <p>Get in touch for collaborations or opportunities</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Quick Intro Section */}
        <section className={styles.introSection}>
          <h2 className={styles.sectionTitle}>What I Do</h2>
          <p className={styles.introText}>
            I create beautiful, responsive websites and web applications using modern technologies 
            like Next.js, React, and Tailwind CSS. With a focus on user experience and clean code, 
            I bring ideas to life in the digital space.
          </p>
        </section>
      </main>
      <Footer/>
    </div>
  );
}