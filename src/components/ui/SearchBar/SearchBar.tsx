import { useState, useEffect } from "react";
import { UI_TEXT } from "../../../constants/uiText";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"; 
import { SPECIES_OPTIONS, CHARACTER_OPTIONS } from "../../../constants/filters";
import { FilterGroup } from "../FilterGroup/FilterGroup";
import { AdjustmentsVerticalIcon as AdjustmentsVerticalSolid } from "@heroicons/react/24/solid";
import { AdjustmentsVerticalIcon as AdjustmentsVerticalOutline } from "@heroicons/react/24/outline";



type Props = { searchTerm: string; onSearchTermChange: (term: string) => void; speciesFilter: string; onSpeciesFilterChange: (species: string) => void; characterFilter: string; onCharacterFilterChange: (character: string) => void; };

export const SearchBar = ({ 
  searchTerm,
  onSearchTermChange,
  speciesFilter,
  onSpeciesFilterChange,
  characterFilter,
  onCharacterFilterChange }: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  // Local temp state for filters — only apply when user clicks Apply Filters
  const [tempSpecies, setTempSpecies] = useState<string>(speciesFilter);
  const [tempCharacter, setTempCharacter] = useState<string>(characterFilter);

  // keep temp in sync when parent props change (e.g., reset)
  useEffect(() => {
    setTempSpecies(speciesFilter);
    setTempCharacter(characterFilter);
  }, [speciesFilter, characterFilter]);

  const applyFilters = () => {
    onSpeciesFilterChange(tempSpecies);
    onCharacterFilterChange(tempCharacter);
    setShowFilters(false);
  };

  return (
    <div className="w-full p-2">
      <div className="flex items-center gap-3 w-full">
      
        <div className="relative w-full ">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-200 pointer-events-none"/>
        {/* Input de búsqueda */}
        <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
        className="w-full 
        bg-secondary-50 text-black
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
        <div className="mt-3 border 2px w-full bg-white shadow-md rounded-lg p-4 space-y-4">
          <FilterGroup
            title="Character"
            options={CHARACTER_OPTIONS}
            selectedOption={tempCharacter}
            onSelect={setTempCharacter}
          />
          <FilterGroup
            title="Species"
            options={SPECIES_OPTIONS}
            selectedOption={tempSpecies}
            onSelect={setTempSpecies}
          />

          <button onClick={applyFilters} className="w-full  bg-primary-600 text-white py-2 rounded-lg">
            {UI_TEXT.APPLY_FILTERS}
          </button>
        </div>
      )}
  </div>
  );
};