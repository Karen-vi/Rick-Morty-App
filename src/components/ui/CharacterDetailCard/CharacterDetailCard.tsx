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
    <div className="bg-white rounded-md shadow-sm">
      <div className="divide-y divide-gray-200">
        {details.map((detail) => (
          <div key={detail.label} className="px-4 py-5">
            <span className="block text-sm font-semibold text-gray-900">
              {detail.label}
            </span>
            <span className="block text-gray-700 mt-1">{detail.value || "-"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
