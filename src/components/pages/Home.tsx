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
      
      <h1 className="text-2xl font-bold mb-4">Rick & Morty App</h1>
      <div className="bg-red-500 text-white p-4">
  tailwind test
</div>
<div className="bg-primary600 text-white p-4">
  custom color test
</div>

    <div className="bg-primary600 text-primary100 p-4">
  ¡Tus colores personalizados están activos!
</div>

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
