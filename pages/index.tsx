import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { ListItem } from "./api/list";
import { db } from "@/utils/db";

type HomeProps = {
  list: ListItem[]
}

export default function Home({list}: HomeProps) {
  return (
    <>
      <Head>
        <title>Torrent Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {list.map((item) => (
          <div key={item.name}>{item.name}</div>  
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const items = await db.collection('items').get();
  const list = items.docs.map((item) => item.data() as ListItem)

  return {
    props: {list}
  }
}