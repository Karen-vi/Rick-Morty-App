import { useState } from "react";
import  { SearchBar } from "../../ui/SearchBar/SearchBar";
import type { Character } from "../../../types/character";
import { CharacterSearchSection } from "../../layout/CharacterSearchSection/CharacterSearchSection";


const Home = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null)
  return (
    <div >
      <h1 className=" bg-secondary-50 text-2xl font-bold mb-4">Rick & Morty App</h1>
      <CharacterSearchSection onSelectCharacter={(id: string) => {
        console.log("Character selected from Home:", id);
      }} />
    </div>
  );
};

export default Home;
