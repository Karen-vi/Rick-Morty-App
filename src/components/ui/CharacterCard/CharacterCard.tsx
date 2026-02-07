import { useState } from "react";
import type { Character } from "../../../types/character";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useFavorites } from "../../../contexts/FavoritesContext";

type CharacterCardProps = {
  character: Character;
  onSelect: (id: string) => void;
};

export const CharacterCard = ({ character, onSelect }: CharacterCardProps) => {
  const placeholder =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-size="12">No image</text></svg>';

  const initialSrc = character.image ? character.image.trim() : placeholder;
  const [src, setSrc] = useState(initialSrc);

  return (
    <div
      className="cursor-pointer hover:bg-secondary-40  border-t border-y "
      onClick={() => onSelect(character.id)}
    >
      <div className="p-5  w-full">
        <div className="  flex items-center space-x-4">
          <img
            src={src}
            alt={character.name}
            className="w-10 h-10 rounded-full"
            onError={() => setSrc(placeholder)}
            loading="lazy"
          />
          <div className="min-w-0 flex-1 flex items-center justify-between">
            <div className="mr-3 min-w-0">
              <h2 className="font-bold text-lg truncate">{character.name}</h2>
              <p className="text-sm text-gray-600 truncate">{character.species}</p>
            </div>
            <div>
              <FavoriteButton id={character.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FavoriteButton = ({ id }: { id: string | number }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(String(id));

  return (
    <button
      aria-label={fav ? "Remove favorite" : "Add favorite"}
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(String(id));
      }}
      className="p-1 rounded hover:bg-gray-100"
      title={fav ? "Remove favorite" : "Add favorite"}
    >
      {fav ? (
        <HeartSolid className="w-5 h-5 text-secondary-600" />
      ) : (
        <HeartOutline className="w-5 h-5 text-gray-400" />
      )}
    </button>
  );
};
