// components/CharacterSearchSection.tsx
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import { ResultList } from "../../ui/ResultList/ResultList";
import { useState } from "react";
import type { Character } from "../../../types/character";
import { useCharacters } from "../../../hooks/useCharacter"; 

type Props = { onSelectCharacter: (id: string) => void; };

export const CharacterSearchSection = ({ onSelectCharacter }: Props) => {
    const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("All");
    const [characterFilter, setCharacterFilter] = useState("All")
    
    const { characters, loading, error } = useCharacters(searchTerm, speciesFilter);
    const starredIds: string[] = []; 

    
    const displayedCharacters = characters.filter((c) =>
    characterFilter === "Starred"
      ? starredIds.includes(c.id)
      : characterFilter === "Others"
      ? !starredIds.includes(c.id)
      : true
  )
    const handleSelectCharacter = (id: string) => {
    setSelectedCharacterId(id);
    console.log("Character selected:", id);
    }
  return (
    <div className="w-full md:w-1/2  p-4 bg-green-50 rounded-lg">
      <SearchBar searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        speciesFilter={speciesFilter}
        onSpeciesFilterChange={setSpeciesFilter}
        characterFilter={characterFilter}
        onCharacterFilterChange={setCharacterFilter} />
        <div>
        <ResultList characters={displayedCharacters} onSelectCharacter={onSelectCharacter}  />
        </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error loading characters</p>}

      {/* Solo para test: mostrar el id del personaje seleccionado */}
      {selectedCharacterId && (
        <div className="mt-4 p-2 border rounded">
          Selected Character ID: {selectedCharacterId}
        </div>
      )}
    </div>
  );
}
