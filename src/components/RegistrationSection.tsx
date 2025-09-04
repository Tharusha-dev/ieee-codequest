const RegistrationSection = ({ id, togglePopup }: { id: string, togglePopup: () => void }) => {
  return (
    <div id={id} className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-8">Registration</h2>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg text-center">
        <p className="text-gray-400 mb-4 text-lg">To register for CodeQuest: Vault Edition, you need to solve a small CTF challenge. Click the register button to open the popup and follow the instructions.</p>
        <button
          onClick={togglePopup}
          className="bg-green-500 text-black rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none text-xl"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default RegistrationSection;
