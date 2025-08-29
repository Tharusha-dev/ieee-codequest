const Introduction = () => {
  return (
    <section className="text-center max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Step into the ultimate Capture the Flag (CTF) challenge, where cybersecurity meets strategy, skill, and innovation.</h2>
      <div className="grid md:grid-cols-3 gap-4 text-left">
        <div className="bg-pink-500/20 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Decrypt intricate puzzles.</h3>
        </div>
        <div className="bg-teal-500/20 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Exploit security vulnerabilities.</h3>
        </div>
        <div className="bg-blue-500/20 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Master logic-based challenges inspired by real-world cyber threats.</h3>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Awaits You?</h2>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          <div className="bg-gray-500/20 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Gain cutting-edge insights from industry experts through exclusive workshops.</h3>
          </div>
          <div className="bg-yellow-500/20 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Compete in thrilling online & on-site hackathon rounds.</h3>
          </div>
          <div className="bg-blue-300/20 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Claim prestigious prizes and connect with top professionals.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
