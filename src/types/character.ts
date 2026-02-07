export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender?: string;
}

export interface CharactersResponse {
  characters: {
    info: { 
      count: number; 
      pages: number; 
      next: number | null; 
      prev: number | null; 
    };
    results: Character[];
  };
}

