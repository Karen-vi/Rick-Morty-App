import { useState } from "react";
import type { Character } from "../../../types/character";
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { useFavorites } from "../../../contexts/FavoritesContext";

export const CharacterHeader = ({ character }: { character: Character }) => {
    const placeholder =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-size="12">No image</text></svg>';

    const [imageError, setImageError] = useState(false);
    const imageSrc = imageError || !character.image ? placeholder : character.image.trim();
    const { isFavorite } = useFavorites();

    return (
        <div className="flex flex-col gap-4 items-start space-x-4 mb-6">
            <div className="relative flex-shrink-0 w-20 h-20">
                <img
                    key={character.id}
                    src={imageSrc}
                    alt={character.name}
                    className="w-20 h-20 rounded-full shadow-md object-cover"
                    onError={() => setImageError(true)}
                    loading="lazy"
                />
                {isFavorite(String(character.id)) && (
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                        <HeartSolid className="w-5 h-5 text-secondary-600" />
                    </div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold truncate">{character.name}</h1>
            </div>
        </div>
    );
};