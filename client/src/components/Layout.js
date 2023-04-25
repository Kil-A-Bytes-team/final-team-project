import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        © My Website {new Date().getFullYear()}
      </footer>
    </div>
  );
}
