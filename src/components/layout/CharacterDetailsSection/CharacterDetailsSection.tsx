import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Character } from "../../../types/character";
import { CharacterHeader } from "../../ui/CharacterHeader/CharacterHeader";
import { CharacterDetailCard } from "../../ui/CharacterDetailCard/CharacterDetailCard";

export const CharacterDetailSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    let isMounted = true;

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setCharacter(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setCharacter(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!character) return null;

  return (
    <div className="fixed md:static top-0 left-0 w-screen md:w-3/5 h-screen md:h-auto bg-white p-6 overflow-y-auto md:sticky md:top-20     z-50">
      {/* Back button visible only on mobile */}
      <div className="mb-4 md:hidden">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-sm text-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Volver</span>
        </button>
      </div>

      {!character && id && <p className="text-center py-8">Cargando...</p>}
      {character && (
        <>
          <CharacterHeader character={character} />
          <CharacterDetailCard character={character} />
        </>
      )}
    </div>
  );
};
