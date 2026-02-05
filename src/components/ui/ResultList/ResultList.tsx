import type { Character } from "../../../types/character";
import { CharacterCard } from "../CharacterCard/CharacterCard";

type ResultsListProps = {
  characters: Character[];
  onSelectCharacter: (id: string) => void;
};

export const ResultList = ({ characters, onSelectCharacter }: ResultsListProps) => {
  return (
    <div >
      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} onSelect={onSelectCharacter} />
      ))}
    </div>
  );
};
