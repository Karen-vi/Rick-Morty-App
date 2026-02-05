import type { Character } from "../../../types/character";

type CharacterCardProps = {
  character: Character;
  onSelect: (id: string) => void;
};

export const CharacterCard = ({ character, onSelect }: CharacterCardProps) => {
  console.log(JSON.stringify(character.image))
  return (
    <div className="cursor-pointer hover:bg-secondary-40  border-t border-y "
    onClick={() => onSelect(character.id)}>
        <div className="p-5  w-full">
        <div className="  flex items-center space-x-4">
          <img
            src={character.image.trim()}
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
