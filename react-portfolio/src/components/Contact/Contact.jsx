import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:umisiguca25@gmail.com">umisiguca25@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/umi-siguca-96a91320b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmlM9WVCST5eCN2Lpzv4f0w%3D%3D">
            linkedin.com/umi-siguca
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/Umi252">github.com/Umi252</a>
        </li>
      </ul>
      <div className={styles.download}>
        <a href="/CV.pdf" download>
          <button className={styles.downloadButton}>
            <img src={getImageUrl("contact/downloadIcon.png")} alt="Download icon" />
            Download CV
          </button>
        </a>
      </div>
    </footer>
  );
};