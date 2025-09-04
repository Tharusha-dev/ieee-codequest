import { useState } from 'react';

const Registration = ({ isOpen, togglePopup, flag }: { isOpen: boolean, togglePopup: () => void, flag: string }) => {
  const [submittedFlag, setSubmittedFlag] = useState("");
  const [verificationStatus, setVerificationStatus] = useState<"" | "correct" | "incorrect">("");

  const handleFlagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const decodedFlag = Buffer.from(flag, 'base64').toString('ascii');
    if (submittedFlag === decodedFlag) {
      setVerificationStatus("correct");
    } else {
      setVerificationStatus("incorrect");
    }
  };

  return (
    <div>
      <div id={flag} className="flag" style={{ display: 'none' }}></div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 popup-background">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Registration</h2>
            <p className="text-gray-400 mb-4 text-lg">The flag is generated per session and server rendred by the backend and is unique to you. It won't be the same for others.</p>
            <form onSubmit={handleFlagSubmit}>
              <div className="mb-4">
                <label htmlFor="flag" className="block text-green-500 font-bold mb-2">Flag</label>
                <input 
                  type="text" 
                  id="flag" 
                  name="flag" 
                  className="w-full bg-gray-800 text-white border-2 border-green-500 rounded-lg p-2"
                  value={submittedFlag}
                  onChange={(e) => setSubmittedFlag(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="w-full mt-4 px-4 py-2 bg-green-500 text-black rounded-lg"
              >
                {'Submit'}
              </button>
            </form>
            {verificationStatus === "correct" && (
              <p className="text-green-500 mt-2">Correct flag!</p>
            )}
            {verificationStatus === "incorrect" && (
              <p className="text-red-500 mt-2">Incorrect flag.</p>
            )}
            <div>
              <details className="text-gray-400 mt-4">
                <summary className="cursor-pointer">Hints:</summary>
                <div className="mt-2">
                  <p>1. Find the hidden div with the class 'flag'.</p>
                  <p>2. The flag is base64 encoded in the id of that div.</p>
                  <p>3. Decode the flag and enter it in the input field.</p>
                </div>
              </details>
            </div>
            <button onClick={togglePopup} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
