import Image from "next/image"
import Container from "../components/Container"

export default function Photo({photo}) {
  return (
    <>
    <Container text={photo.title}>
    <div className="min-h-max flex flex-col">
        <p className="text-5xl text-center py-16">{photo.title}</p>
        <Image className="rounded-xl m-4 mx-auto" src={photo.url} />
    </div>
    </Container>
    </>
  )
}

export async function getServerSideProps(context) {
    const {params} = context
    const response =  await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    const photo = await response.json()
    console.log(photo);

    return {
      props: {photo}, // will be passed to the page component as props
    }
  }
