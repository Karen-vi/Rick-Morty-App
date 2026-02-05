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
    <div className="space-y-2 text-gray-700">
      {details.map((detail) => (
        <p key={detail.label}>
          <span className="font-semibold">{detail.label}:</span> {detail.value}
        </p>
      ))}
    </div>
  );
};
