import { CharacterDetailSection } from "../../layout/CharacterDetailsSection/CharacterDetailsSection";
import { CharacterSearchSection } from "../../layout/CharacterSearchSection/CharacterSearchSection";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row h-screen" >
      <div className="w-full md:w-1/2">
        <CharacterSearchSection onSelectCharacter={(id: string) => navigate(`/character/${id}`)} />
      </div>

      <div className="w-full">
      <CharacterDetailSection />
      </div>
    </div>
  );
};

export default Home;
