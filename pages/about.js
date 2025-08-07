import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import Navbar from '../src/components/Navbar.js'; // Adjust path as needed
import Footer from '../src/components/Footer'; // Adjust path as needed

export default function About() {
  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 70 }
  ];

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading the frontend team in building responsive web applications using React and Next.js frameworks.'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions LLC',
      period: '2018 - 2021',
      description: 'Developed and maintained client websites with focus on performance and accessibility.'
    }
  ];

  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'State University',
      year: '2018'
    },
    {
      degree: 'Web Development Certification',
      institution: 'Code Academy',
      year: '2017'
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about my skills and professional journey" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.subtitle}>Get to know me better</p>
          </div>
        </section>

        {/* About Content */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2>My Journey</h2>
              <p>
                I'm a passionate frontend developer with 5+ years of experience creating modern web applications.
                My journey began when I built my first website in college, and I've been hooked ever since.
              </p>
              <p>
                I specialize in React and Next.js development, with a strong focus on creating performant,
                accessible, and user-friendly interfaces. I believe in writing clean, maintainable code
                and staying up-to-date with the latest web technologies.
              </p>
              <div className={styles.personalInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Name:</span>
                  <span>John Doe</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span>San Francisco, CA</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span>john@example.com</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/images/01.png"
                alt="About me"
                width={500}
                height={600}
                className={styles.image}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>My Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <h3>{skill.name}</h3>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.timeline}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className={styles.period}>{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {education.map((edu, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span className={styles.period}>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}