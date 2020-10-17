import { GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"

type User = {
  id: number,
  name: string,
  email: string
}

type Props = {
  data: User[]
}

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <h3>Login</h3>
      <div>
        {data.map((d) =>
          <div key={d.id}>
            <div>{d.name}</div>
            <div>{d.email}</div>
          </div>)}
      </div>
      <div>
        <a href="http://localhost:3030/login/github">Github</a>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch("http://localhost:3030/api/users").then(res => res.json())
  return { props: { data } }
}