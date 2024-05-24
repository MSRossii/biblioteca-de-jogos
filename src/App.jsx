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
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type="submit">Adicionar à biblioteca</button>
      </form>
    </div>
  );
}
