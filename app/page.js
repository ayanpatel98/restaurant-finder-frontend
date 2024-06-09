import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="mt-5">Homepage | Paprika</h1>
      <div>To get the details of the restaurant city and state wise, please navigate to URLs in the format:
        http://localhost:3000/city/state (e.g., <Link href="/rochester/ny">http://localhost:3000/rochester/ny</Link>)</div>
    </main>
  );
}
