import { useQuery } from "@apollo/client/react";
import { GET_CHARACTERS } from "../graphql/queries";
import type { CharactersResponse, Character } from "../types/character";



const Home = () => {
  const { data, loading, error } = useQuery<CharactersResponse>(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading characters</p>;

  return (

    
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <h1 className="text-red-600 text-4xl font-bold mb-6">
  Tailwind test
</h1>

        <h1 className="text-purple-600 text-4xl font-bold mb-4">
            Tailwind funcionando 🚀
        </h1>

        <h1 className="text-blue-600 text-3xl font-bold">Rick & Morty</h1>


      {data?.characters.results.map((char: Character) => (
                        <div key={char.id} className="border rounded p-2">
          <img src={char.image} alt={char.name} />
          <h3 className="font-bold">{char.name}</h3>
          <p>{char.species}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
