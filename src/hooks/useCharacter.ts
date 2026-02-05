import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client/react";
import { GET_CHARACTERS } from "../api/graphql/queries";
import type { Character, CharactersResponse } from "../types/character";

export const useAllCharacters = (searchTerm: string, speciesFilter?: string) => {
  const client = useApolloClient();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError(null);

      try {
        let allResults: Character[] = [];
        let page = 1;
        let totalPages = 1;

        // primera consulta para obtener totalPages
        const { data } = await client.query<CharactersResponse>({
          query: GET_CHARACTERS,
          variables: {
            page,
            name: searchTerm || undefined,
            species: speciesFilter !== "All" ? speciesFilter : undefined,
          },
        });

        allResults = [...allResults, ...(data?.characters?.results || [])];
        totalPages = data?.characters?.info?.pages || 1;

        // traer el resto de páginas
        for (page = 2; page <= totalPages; page++) {
          const { data } = await client.query<CharactersResponse>({
            query: GET_CHARACTERS,
            variables: {
              page,
              name: searchTerm || undefined,
              species: speciesFilter !== "All" ? speciesFilter : undefined,
            },
          });

          allResults = [...allResults, ...(data?.characters?.results || [])];
        }

        setCharacters(allResults);
      } catch (err: unknown) {
        setError(err instanceof Error ? err : new Error("Unexpected error"));
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [searchTerm, speciesFilter, client]);

  return { characters, loading, error };
};
