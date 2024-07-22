import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites with strong foundations in :
                - Programming languages: C, Python, Emacs, Vim, Git/Github
                - Data structures and algorithms
                - Web development: HTML, CSS, JSON, Javascript, JQuery, Flask
                - DevOps and systems engineering: SSH, SSL/TLS, HTTP/S, Webstack, debugging, load balancers
                - Databases: SQL, MySQL
                - Agile development: Test Driven Development, Error Handling, I/O, Web Scraping
                - Soft skills: Technical Writing, Collaboration, Whiteboarding, Mock Interviews, Time Management

Additionally, I have expertise in modern front-end development, including:

- Modern JavaScript (ES6) and TypeScript
- Advanced HTML and CSS, including responsive design
- React ecosystem, including props, state management, and React Redux

I'm excited to apply my skills and knowledge to real-world problems and continue learning and growing as a software developer. I'm a strong communicator, team player, and problem solver, with a passion for building efficient, scalable, and user-friendly applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have little experience developing back-end systems but i am learning
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};