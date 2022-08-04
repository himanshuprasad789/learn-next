import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const Error = () => {
  const router = useRouter();
  return <div className="h-screen ">
      <Head>
        <title>404</title>
    </Head>
    <h1 className="text-[300px] text-center font-mono">404</h1>
   <p className="text-center tracking-widest text-2xl">go back to <Link href="/"><a className="underline font-bold uppercase">home</a></Link></p>
   </div>;
};

export default Error;
