import Head from "next/head"
import A from "./A"
import Context from "./Context";
import { useContext } from "react";


export default function Container({children, text}) {
  const {theme, handleThemeSwitch} = useContext(Context)
  return (
    <>
    <div className="bg-yellow-400 text-blue-200 font-mainfont container px-10 flex flex-col min-h-screen dark:bg-black">
        <Head>
          <title>{text}</title>
        </Head>
        <div className="flex text-5xl justify-around py-10">
            <A href="/" text="Main Page" />
            <A href="/photos" text="Album" />
            <A href="/form" text="Form" />
            <A href="/output" text="Output" />
            <button onClick={handleThemeSwitch}>Now: {theme}, click to change</button>
        </div>
        <div>
        {children}
        </div>
        </div>
        </>
  )
}