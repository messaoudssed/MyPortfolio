import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import { projects } from '../src/data/projects';
import Navbar from '../src/components/Navbar.js'; // Adjust path as needed
import Footer from '../src/components/Footer'; // Adjust path as needed

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
      </Head>
<Navbar />
      <main>
        <h1>My Projects</h1>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className={styles.projectImage}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={project.source} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}