"use client";

import { useEffect, useState } from "react";
import API from "../../services/api";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ContentForm from "../../components/ContentForm";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";


import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
  try {
    const res = await API.get("/content");

    if (res.data) {
      setTitle(res.data.title || "");
      setDescription(res.data.description || "");
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  const saveContent = async () => {
  try {
    await API.put("/content", {
      title,
      description,
    });

    setMessage("✅ Content updated successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);

  } catch (err) {
    setMessage("❌ Failed to update content.");
  }
};

if (loading) {
  return <h2 style={{ padding: "40px" }}>Loading...</h2>;
}

  return (
    <>
      <Sidebar />

      <div className={styles.main}>
        <Navbar />

       <div className={styles.content}>

        {message && (
            <div className={styles.message}>
                {message}
            </div>
            )}

            <div className={styles.cards}>

                <div className={styles.card}>
                <h3>Total Pages</h3>
                <p>1</p>
                </div>

                <div className={styles.card}>
                <h3>Status</h3>
                <p>Active</p>
                </div>

                <div className={styles.card}>
                <h3>Content</h3>
                <p>Dynamic</p>
                </div>

            </div>

            <ContentForm
                title={title}
                description={description}
                setTitle={setTitle}
                setDescription={setDescription}
                saveContent={saveContent}
            />

            </div>
        
      </div>
    </>
  );
}