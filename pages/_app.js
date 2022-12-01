import "../styles/globals.css";
import { useState, useEffect } from "react";
import Context from "./components/Context";
import { v4 } from "uuid";

export default function Provider({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [list, setlist] = useState([]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  function handleResetForm() {
    setName("")
    setImg("")
  }

  function handleDelete(id) {
    setlist(list.filter(l => l.id !== id))
  }

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setlist([...list, { id: v4(), name, img }]);
    setName("");
    setImg("");
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImg(e) {
    setImg(e.target.value);
  }

  return (
    <Context.Provider
      value={{
        theme,
        name,
        img,
        handleImg,
        handleName,
        handleSubmit,
        handleThemeSwitch,
        list,
        handleDelete,
        handleResetForm
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
}

