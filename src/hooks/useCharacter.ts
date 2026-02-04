
import { useQuery } from "@apollo/client/react";
import { GET_CHARACTERS } from "../api/graphql/queries";
import type { Character, CharactersResponse } from "../types/character";

export const useCharacters = (searchTerm: string, speciesFilter?: string) => {
  const { data, loading, error } = useQuery<CharactersResponse>(GET_CHARACTERS, {
    variables: { 
      name: searchTerm || undefined,
      species: speciesFilter !== "All" ? speciesFilter : undefined
    },
    skip: !searchTerm && speciesFilter === "All"
  });

  const characters: Character[] = data?.characters?.results || [];

  return { characters, loading, error };
};
