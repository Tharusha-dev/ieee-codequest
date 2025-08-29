const Prizes = () => {
  return (
    <section className="w-full max-w-4xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Prizes</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-400">2nd Place</h3>
          <p className="text-4xl font-bold mt-2">40,000 <span className="text-lg">LKR</span></p>
        </div>
        <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg scale-110">
          <h3 className="text-2xl font-bold">1st Place</h3>
          <p className="text-5xl font-bold mt-2">60,000 <span className="text-lg">LKR</span></p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-400">3rd Place</h3>
          <p className="text-4xl font-bold mt-2">20,000 <span className="text-lg">LKR</span></p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
