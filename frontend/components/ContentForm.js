"use client";

import styles from "./ContentForm.module.css";

export default function ContentForm({
  title,
  description,
  setTitle,
  setDescription,
  saveContent,
}) {
  return (
    <div className={styles.card}>
      <h2>Website Content</h2>

      <label>Website Title</label>

      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter website title"
      />

      <label>Website Description</label>

      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter website description"
      />

      <button
        className={styles.button}
        onClick={saveContent}
      >
        Save Content
      </button>
    </div>
  );
}