import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  // Verifica se ambos os campos estão preenchidos
  const isFormValid = title.trim() !== "" && cover.trim() !== "";

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Título" value={title} setValue={setTitle} />
      <TextInput label="Capa" value={cover} setValue={setCover} />
      <button type="submit" disabled={!isFormValid}>
        Adicionar
      </button>
    </form>
  );
}
