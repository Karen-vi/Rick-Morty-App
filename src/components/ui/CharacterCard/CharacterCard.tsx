import type { Character } from "../../../types/character";

type CharacterCardProps = {
  character: Character;
  onSelect: (id: string) => void;
};

export const CharacterCard = ({ character, onSelect }: CharacterCardProps) => {
  return (
    <div className=" rounded-lg cursor-pointer hover:bg-secondary-40 w-full flex justify-start border-t border-b border-secondary-150  p-1"
    onClick={() => onSelect(character.id)}>
        <div className=" p-3">
        <div className="flex items-center space-x-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-10 h-10 rounded-full"/>
            <div>
                <h2 className="font-bold text-lg">{character.name}</h2>
                <p className="text-sm text-gray-600">{character.species}</p>
            </div>
        </div>
        </div>
    </div>
    
  );
};
