import { CharacterDetailSection } from "../../layout/CharacterDetailsSection/CharacterDetailsSection";
import { CharacterSearchSection } from "../../layout/CharacterSearchSection/CharacterSearchSection";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div  >
      <div >
        <CharacterSearchSection onSelectCharacter={(id: string) => navigate(`/character/${id}`)} />
      </div>

      <div>
      <CharacterDetailSection />
      </div>
    </div>
  );
};

export default Home;
