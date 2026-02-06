import { useState } from "react";
import type { Character } from "../../../types/character";

export const CharacterHeader = ({ character }: { character: Character }) => {
    const placeholder =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%236b7280" font-size="12">No image</text></svg>';

    const [imageError, setImageError] = useState(false);
    const imageSrc = imageError || !character.image ? placeholder : character.image.trim();

    return (
        <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-shrink-0">
                <img
                    key={character.id}
                    src={imageSrc}
                    alt={character.name}
                    className="w-20 h-20 rounded-full shadow-md object-cover"
                    onError={() => setImageError(true)}
                    loading="lazy"
                />
            </div>

            <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold truncate">{character.name}</h1>
                <p className="text-sm text-gray-600">{character.species}</p>
            </div>
        </div>
    );
};