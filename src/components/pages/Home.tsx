import { useState } from "react";
import  { SearchBar } from "../ui/SearchBar/SearchBar";
import type { Character } from "../../types/character";


const Home = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);

  // Función que pasamos al SearchBar
  const handleSelectCharacter = (id: string) => {
    setSelectedCharacterId(id);
    console.log("Character selected:", id);
    // Aquí podrías abrir un sidebar o modal con detalle
  };

  return (
    <div className="p-4">
       <div className="bg-primary-600 text-white p-6 rounded-lg shadow-md"> <h1 className="text-2xl font-bold">Hola Tailwind</h1> <p className="text-textMuted mt-2"> Este es un ejemplo usando tus colores personalizados. </p> <button className="mt-4 bg-secondary600 text-white px-4 py-2 rounded"> Botón </button> </div>
      <h1 className="text-2xl font-bold mb-4">Rick & Morty App</h1>
      {/* SearchBar con filtros */}
      <SearchBar onSelectCharacter={handleSelectCharacter} />

      {/* Solo para test: mostrar el id del personaje seleccionado */}
      {selectedCharacterId && (
        <div className="mt-4 p-2 border rounded">
          Selected Character ID: {selectedCharacterId}
        </div>
      )}
    </div>
  );
};

export default Home;
