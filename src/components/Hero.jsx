const Hero = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Find your next favorite movie
      </h1>

      <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">
        Discover trending movies and classics
      </p>

      <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search movie..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        />

        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500" type="button">Search</button>
      </div>
    </section>
  );
};

export default Hero;
