import SearchBar from "./components/searchBar";


function App() {
  return (
    <div className="">
      <div className="flex items-center flex-col w-full">
        <header className="  p-4 my-5">
          <h1>Log Management Search Bar</h1>
        </header>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
