import { CharacterDetailSection } from "../../layout/CharacterDetailsSection/CharacterDetailsSection";
import { CharacterSearchSection } from "../../layout/CharacterSearchSection/CharacterSearchSection";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div >
      <CharacterSearchSection onSelectCharacter={(id: string) => navigate(`/character/${id}`)} />
      <CharacterDetailSection />
    </div>
  );
};

export default Home;
