import { CharacterSearchSection } from "../../layout/CharacterSearchSection/CharacterSearchSection";


const Home = () => {
  return (
    <div >
      <CharacterSearchSection onSelectCharacter={(id: string) => {
        console.log("Character selected from Home:", id);
      }} />
    </div>
  );
};

export default Home;
