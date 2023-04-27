import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Kil-A-Bytes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
      <footer>
        © My Website {new Date().getFullYear()}
      </footer>
    </div>
  );
}
