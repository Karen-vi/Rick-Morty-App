import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Character } from "../../../types/character";
import { CharacterHader } from "../../ui/CharacterHeader/CharacterHeader";
import { CharacterDetailCard } from "../../ui/CharacterDetailCard/CharacterDetailCard";

export const CharacterDetailSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="w-full md:w-1/3 fixed right-0 top-0 h-screen bg-red-100 shadow-lg p-4">
      <button onClick={() => navigate("/")}>Cerrar</button>
      <CharacterHader character={character} />
      <CharacterDetailCard character={character} />
    </div>
  );
}
