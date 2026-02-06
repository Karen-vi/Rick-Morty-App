import { CharacterDetailSection } from "../../layout/CharacterDetailsSection/CharacterDetailsSection";
import { CharacterSearchSection } from "../../layout/CharacterSearchSection/CharacterSearchSection";
import { useNavigate, useParams } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="min-h-screen">
      <div className="md:flex">
        <main className={id ? "hidden md:block flex-1" : "flex-1"}>
          <CharacterSearchSection onSelectCharacter={(id: string) => navigate(`/character/${id}`)} />
        </main>

        {id && (
          <aside className="hidden md:block w-1/3 border-l border-gray-200">
            <CharacterDetailSection />
          </aside>
        )}
      </div>

      {/* Mobile: when an id is present, show details as full page */}
      {id && (
        <div className="block md:hidden">
          <CharacterDetailSection />
        </div>
      )}
    </div>
  );
};

export default Home;
