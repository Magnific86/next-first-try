import A from "./components/A"
import Container from "./components/Container";


export default function Photos({photos}) {


  return (
    <>
    <Container text={"Album"}>
    <div className="min-h-max flex wrap flex-col container">
        <div className="mx-auto text-5xl px-8 pb-16 flex">
        <h1>Photos</h1>
        </div>
        <ul className="flex flex-wrap">
        {photos && photos.map(p => 
            <li className="w-1/5 p-6" key={p.id}>
              <p>Click to go image page ▼</p>
                <A href={`/photos/${p.id}`} text={p.title} />
                <img className="rounded-xl m-4" src={p.url} />
            </li>)}
        </ul>
    </div>
    </Container>
    </>
  )
}

export async function getStaticProps(context) {
    const respone  = await fetch("https://jsonplaceholder.typicode.com/photos")
    const photos = await respone.json()
    return {
      props: {photos}, // will be passed to the page component as props
    }
  }
