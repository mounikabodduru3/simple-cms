"use client";

import styles from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <header className={styles.navbar}>
      <h3>Dashboard</h3>

      <button
        className={styles.logout}
        onClick={handleLogout}
      >
        Logout
      </button>
    </header>
  );
}