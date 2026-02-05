import type { Character } from "../../../types/character";

export const CharacterHader = ({ character }: { character: Character }) => {  
    return (
        <div className="flex flex-col items-start mb-6">
            <img className="w-20 h-20 rounded-full shadow-md" src={character.image} alt={character.name} />
            <h1 className="text-lg font-bold">{character.name}</h1>
        </div>
    )
 }