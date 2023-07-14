import Board from 'components/Board';

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-slate-500">
      <header className="py-4">
        <h1 className="text-center text-white p-2 font-mono  text-3xl font-bold">
          Memory Game
        </h1>
      </header>
      <main className="flex h-full w-full flex-grow justify-center items-center overflow-y-auto my-2 px-4">
        <Board />
      </main>
      <footer className="h-[100px]"></footer>
    </div>
  );
}

export default App;
