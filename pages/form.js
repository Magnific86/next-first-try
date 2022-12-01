import Container from "./components/Container";
import { React, useContext } from "react";
import Context from "./components/Context";


export default function Form() {
  const {name, img, handleName, handleImg, handleSubmit, handleResetForm} = useContext(Context)
console.log(name);



  return (
    <Container text="Form">
    <div className="container flex flex-col">
        <form className="mx-auto flex flex-col rounded-md" onSubmit={handleSubmit}>
            <label className="text-4xl py-6 px-2" htmlFor="name">Name</label>
           <input type="text" value={name} onChange={(e) => handleName(e)} 
           className="bg-transparent outline-none border-b border-blue-200 mb-6"/>
           <label className="text-4xl py-6 px-2" htmlFor="img">Image</label>
           <input type="text" id="img" value={img} onChange={(e) => handleImg(e)} 
           className="bg-transparent outline-none border-b border-blue-200 mb-6"/>
           <input type="reset" className="bg-red-200 rounded-full px-6 py-3 text-black mt-2" onClick={handleResetForm}/>
           <input type="submit" value="submit" className="bg-blue-200 rounded-full px-6 py-3 text-black my-8"/>
        </form>
    </div>
    </Container>
  )
}
