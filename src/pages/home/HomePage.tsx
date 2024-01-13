const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-purple-700 text-white p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold">Algorithm Docs</h1>
        <p className="mt-4 text-lg">
          The ultimate guide to understanding algorithms in depth.
        </p>
      </header>
      <main className="text-center mb-8">
        <p className="mb-6">
          Explore how algorithms can optimize performance and solve complex
          problems.
        </p>
        <button className="bg-white text-purple-700 py-2 px-6 rounded-full font-semibold hover:bg-purple-300 transition-colors">
          Get Started
        </button>
      </main>
      <footer className="text-sm">
        Available for Windows, macOS, and Linux.
      </footer>
    </div>
  );
};

export default HomePage;
