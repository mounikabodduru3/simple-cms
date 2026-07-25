"use client";

import Link from "next/link";
import styles from "./Sidebar.module.css";

export default function Sidebar() {

    return(

        <aside className={styles.sidebar}>

            <h2>Simple CMS</h2>

            <nav>

                <Link href="/dashboard">
                    Dashboard
                </Link>

                <Link href="/">
                    Website
                </Link>

            </nav>

        </aside>

    );

}