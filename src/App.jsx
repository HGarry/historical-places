import Cards from "./components/Cards";
import RandomPlace from "./components/RandomPlace";

function App() {

  return (
    <>
      <div className="bg-gray-900 p-8">
        <RandomPlace />
        <Cards />
      </div>
    </>
  )
}

export default App
