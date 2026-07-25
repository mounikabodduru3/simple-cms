"use client";

import { useEffect, useState } from "react";
import API from "../services/api";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  const [content, setContent] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const res = await API.get("/content");
      setContent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h2>Simple CMS</h2>

        <Link href="/login" className={styles.login}>
          Admin Login
        </Link>
      </nav>

      <section className={styles.hero}>
        <h1>{content.title}</h1>

        <p>{content.description}</p>

        <button>Learn More</button>
      </section>

      <section className={styles.about}>
        <h2>About</h2>

        <p>
          This page is dynamically rendered using data stored in MongoDB through
          the CMS dashboard.
        </p>
      </section>

      <footer className={styles.footer}>
        © 2026 Simple CMS
      </footer>
    </>
  );
}