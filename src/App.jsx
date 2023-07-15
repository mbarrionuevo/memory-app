import Game from 'components/Game';

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-slate-500">
      <header className="md:pt-4">
        <h1 className="text-center text-white p-2 font-mono  text-3xl font-bold uppercase">
          Memory Game
        </h1>
      </header>
      <main className="flex h-full w-full flex-grow justify-center items-center overflow-y-auto mb-2 md:my-2 px-4">
        <Game />
      </main>
    </div>
  );
}

export default App;
