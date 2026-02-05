import type { Character } from "../../../types/character";

export const CharacterHader = ({ character }: { character: Character }) => {  
    return (
        <div className="flex flex-col items-center mb-6">
            <img className="w-32 h-32 rounded-full shadow-md" src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
        </div>
    )
 }