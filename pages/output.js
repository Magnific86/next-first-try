import Context from "./components/Context"
import Container from "./components/Container"
import { useContext } from "react"

export default function Output() {
const {list, handleDelete} = useContext(Context)


  return (
    <>
    <Container text="Output">
    <div>
    <ul className="flex">
            {list.length === 0 && <h1 className="pt-40 text-5xl mx-auto">Add firts photo!</h1>}
                {list.length > 0 && list.map(l => 
                <li key={l.id} className="flex flex-col text-5xl mx-auto">
                    <h3 className="text-5xl mx-auto pb-6">{l.name}</h3>
                    <img className="rounded-sm" src={l.img} />
                    <button onClick={() => handleDelete(l.id)}
                    className="bg-red-400 rounded-full px-8 py-4 text-5xl hover:bg-red-800 text-blue-200 mt-8 mx-auto">Delete</button>
                </li>)}
    </ul>
</div>
    </Container>
    </>
  )
}
