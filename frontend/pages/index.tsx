import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>OAuth</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <h3>Home</h3>
      <div>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </>
  )
}
