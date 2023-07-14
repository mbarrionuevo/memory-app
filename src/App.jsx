function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-slate-500">
      <header className="py-4">
        <h1 className="text-center text-white p-2 font-mono  text-3xl font-bold">
          Memory Game
        </h1>
      </header>
      <main className="flex h-full w-full flex-grow justify-center items-center overflow-y-auto my-2 px-4">
        <section className="grid h-auto max-h-full grid-cols-4 justify-items-center place-items-center gap-3 md:gap-4 w-full max-w-3xl">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item, key) => (
              <div
                key={key}
                className="border border-gray-200 cursor-pointer w-20 h-28 sm:w-40 sm:h-40 rounded-lg shadow p-6"
              ></div>
            )
          )}
        </section>
      </main>
      <footer className="h-[100px]"></footer>
    </div>
  );
}

export default App;
