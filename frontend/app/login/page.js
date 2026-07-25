"use client";

import { useState } from "react";
import API from "../../services/api";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.token));

      alert("Login Successful");

      router.push("/dashboard");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Simple CMS</h1>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "20px" }}>
            Login to manage website content
            </p>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}