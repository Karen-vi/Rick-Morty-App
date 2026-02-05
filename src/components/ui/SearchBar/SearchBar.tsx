import { useState } from "react";
import { useCharacters } from "../../../hooks/useCharacter";
import type { Character } from "../../../types/character";
import { UI_TEXT } from "../../../constants/uiText";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; 
import { SPECIES_OPTIONS, CHARACTER_OPTIONS } from "../../../constants/filters";
import { FilterGroup } from "../FilterGroup/FilterGroup";


type Props = {
  onSelectCharacter: (id: string) => void;
};

export const SearchBar = ({ onSelectCharacter }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [characterFilter, setCharacterFilter] = useState("All");

  const { characters, loading, error } = useCharacters(searchTerm, speciesFilter);

  const starredIds: string[] = []; 


  const displayedCharacters = characters.filter((c) =>
    characterFilter === "Starred"
      ? starredIds.includes(c.id)
      : characterFilter === "Others"
      ? !starredIds.includes(c.id)
      : true
  );

  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-3 w-full">

        <div className="relative w-2/5">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-200 pointer-events-none"/>
        {/* Input de búsqueda */}
        <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
        className="w-full 
        bg-secondary-100 text-black
              pl-10 
              pr-3 
              py-2 
              rounded-lg 
              focus:outline-none 
              focus:ring-1
              focus:ring-purple-400"
              
        />
        </div>

      {/* Botón toggle de filtros */}
      <button
        className="flex items-center gap-1"
        onClick={() => setShowFilters(!showFilters)}
      >
        <AdjustmentsVerticalIcon className="w-6 h-7  text-primary-600" />
      </button>
    </div>

      {/* Panel de filtros */}
      {showFilters && (
        <div className="mt-3 w-full bg-white shadow-md rounded-lg p-4 space-y-4">
          <FilterGroup
            title="Character"
            options={CHARACTER_OPTIONS}
            selectedOption={characterFilter}
            onSelect={setCharacterFilter}
          />
          <FilterGroup
            title="Species"
            options={SPECIES_OPTIONS}
            selectedOption={speciesFilter}
            onSelect={setSpeciesFilter}
          />

          <button className="w-full bg-primary-600 text-white py-2 rounded-lg">
          Apply Filters
        </button>
        </div>
      )}

      {/* Mensajes */}
      {loading && <p className="mt-2">Loading...</p>}
      {error && <p className="mt-2 text-red-500">Error loading characters</p>}

      {/* Resultados */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {displayedCharacters.map((c: Character) => (
          <p
            key={c.id}
            className="cursor-pointer border rounded p-2 text-center"
            onClick={() => onSelectCharacter(c.id)}
          >
            {c.name} ({c.species})
          </p>
        ))}
      </div>
    
  </div>
  );
};