// components/CharacterDetails.tsx
import type { Character } from "../../../types/character";
import { UI_TEXT } from "../../../constants/uiText";

export const CharacterDetailCard = ({ character }: { character: Character }) => {
  const details = [
    { label: UI_TEXT.SPECIES, value: character.species },
    { label: UI_TEXT.STATUS, value: character.status },
    { label: UI_TEXT.OCCUPATION, value: character.occupation },
  ];

    return (
  <div className="flex flex-col space-y-4 text-gray-700">
    {details.map((detail) => (
      <div key={detail.label} className="flex flex-col">
        <span className="font-semibold text-sm text-gray-900">{detail.label}</span>
        <span>{detail.value}</span>
      </div>
    ))}
  </div>
)

};
