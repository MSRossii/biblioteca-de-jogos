import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDault();
  };
  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form>
        <div>
          <label htmlFor="title">Título: </label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input type="text" name="cover" id="cover" />
        </div>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
    </div>
  );
}
