"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Search from "../components/Search/index";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      
      <Search />
    </main>
  );
}
