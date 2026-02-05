import { useState } from "react";
import { useCharacters } from "../../../hooks/useCharacter";
import type { Character } from "../../../types/character";
import { UI_TEXT } from "../../../constants/uiText";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; 
import { SPECIES_OPTIONS, CHARACTER_OPTIONS } from "../../../constants/filters";
import { FilterGroup } from "../FilterGroup/FilterGroup";
import { AdjustmentsVerticalIcon as AdjustmentsVerticalSolid } from "@heroicons/react/24/solid";
import { AdjustmentsVerticalIcon as AdjustmentsVerticalOutline } from "@heroicons/react/24/outline";
import { ResultsList } from "../ResultList/ResultList";



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
      
        <div className="relative w-full lg:w-1/3">
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
              py-3 
              rounded-lg 
              focus:outline-none 
              focus:ring-1
              focus:ring-purple-400"
              
        />
         <button
          className=" focus:outline-none  absolute right-3 top-1/2 -translate-y-1/2 flex items-center"
          onClick={() => setShowFilters(!showFilters)}
          >
          {showFilters ? ( <AdjustmentsVerticalSolid className="w-6 h-6 text-primary-600" /> ) : ( <AdjustmentsVerticalOutline className="w-6 h-6 text-primary-600" /> )}
          </button>
        </div>

      {/* Botón toggle de filtros */}
    </div>

      {/* Panel de filtros */}
      {showFilters && (
        <div className="mt-3  md:w-1/3 border 2px w-full bg-white shadow-md rounded-lg p-4 space-y-4">
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

          <button className="w-full  bg-primary-600 text-white py-2 rounded-lg">
          Apply Filters
        </button>
        </div>
      )}

      {/* Mensajes */}
      {loading && <p className="mt-2">Loading...</p>}
      {error && <p className="mt-2 text-red-500">Error loading characters</p>}

      {/* Resultados */}
      <div >
         <ResultsList characters={displayedCharacters} onSelectCharacter={onSelectCharacter} />
      </div>
  </div>
  );
};