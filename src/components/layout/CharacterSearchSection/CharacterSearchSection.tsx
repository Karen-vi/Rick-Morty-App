// components/CharacterSearchSection.tsx
import { SearchBar } from "../../ui/SearchBar/SearchBar";
import { ResultList } from "../../ui/ResultList/ResultList";
import { useState } from "react";
import type { Character } from "../../../types/character";
import { useAllCharacters } from "../../../hooks/useCharacter"; 
import { UI_TEXT } from "../../../constants/uiText";
import { SortControl } from "../../ui/SortControl/SortControl";

type Props = { onSelectCharacter: (id: string) => void; };

export const CharacterSearchSection = ({ onSelectCharacter }: Props) => {
    const [selectedCharacterId,] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [speciesFilter, setSpeciesFilter] = useState("All");
    const [characterFilter, setCharacterFilter] = useState("All")
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    
    const { characters, loading, error } = useAllCharacters(searchTerm, speciesFilter);
    // const starredIds: string[] = []; 

    console.log( characters.map((c) => ({ name: c.name, image: c.image, })) );

    const displayedCharacters = characters.filter((c:Character) => searchTerm ? c.name.toLowerCase()
    .includes(searchTerm.toLowerCase()) : true 
    ) 
    .sort((a:Character, b:Character) => sortOrder === "asc" ? a.name.localeCompare(b.name, "en", { sensitivity: "base" }) : b.name.localeCompare(a.name, "en", { sensitivity: "base" }) );
  

  return (
    <div className="w-full md:w-1/2  p-4 bg-green-50 rounded-lg flex flex-col gap-4">
        <h1 className="text-2xl  p-4 font-bold">{UI_TEXT.APP_TITLE}</h1>
        
        <SearchBar searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        speciesFilter={speciesFilter}
        onSpeciesFilterChange={setSpeciesFilter}
        characterFilter={characterFilter}
        onCharacterFilterChange={setCharacterFilter} />
        <SortControl sortOrder={sortOrder} onChange={setSortOrder} />
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
