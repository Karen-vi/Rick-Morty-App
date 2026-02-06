import { useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { GET_CHARACTERS } from "../api/graphql/queries";
import type { Character, CharactersResponse } from "../types/character";

const MAX_PAGES = 4; // trae hasta ~80 personajes

export const useAllCharacters = (
  searchTerm: string,
  speciesFilter?: string
) => {
  const client = useApolloClient();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        let results: Character[] = [];

        for (let page = 1; page <= MAX_PAGES; page++) {
          const { data } = await client.query<CharactersResponse>({
            query: GET_CHARACTERS,
            variables: {
              page,
              name: searchTerm || undefined,
              species:
                speciesFilter && speciesFilter !== "All"
                  ? speciesFilter
                  : undefined,
            },
          });

          if (cancelled) return;

          const pageResults = data?.characters?.results || [];

          // si ya no hay resultados, cortamos
          if (pageResults.length === 0) break;

          results = [...results, ...pageResults];
        }

        if (!cancelled) {
          setCharacters(results);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error("Error loading data"));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchCharacters();

    return () => {
      cancelled = true;
    };
  }, [searchTerm, speciesFilter, client]);

  return { characters, loading, error };
};
