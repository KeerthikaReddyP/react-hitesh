import { useState, useEffect, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberIncluded, setNumberIncluded] = useState(false);
  const [charIncluded, setCharIncluded] = useState(false);

  const [Password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberIncluded) str += "0123456789";
    if (charIncluded) str += "!@#$%^&*/_";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, charIncluded, numberIncluded]);

  const handleCopyPassword = () => {
    window.navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, numberIncluded, charIncluded]);

  return (
    <div className="m-4 flex flex-col items-center">
      <h1 className="font-bold text-2xl p-2">Password Generator</h1>
      <h4>tadatadatadatadatadatadatadatada</h4>

      <div className="m-2 flex justify-between overflow-hidden border border-black rounded-full w-1/4">
        <input
          type="text"
          placeholder="Password"
          className="px-2 py-1 w-4/5"
          value={Password}
          readOnly
        />
        <button
          className="px-2 py-1 bg-blue-600 text-white w-1/5"
          onClick={handleCopyPassword}
        >
          Copy
        </button>

        {copied && (
          <div className="absolute right-8 top-6 mt-2 bg-green-600 text-green-200 p-1 rounded text-sm">
            ✓Copied!
          </div>
        )}
      </div>

      <div className="flex w-1/3 justify-between m-4 text-amber-800 font-semibold">
        <div>
          <input
            type="range"
            min={6}
            max={30}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer px-2 accent-amber-800"
          />
          <label htmlFor="length" className="px-2">
            Length : {length}
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numberIncluded}
            onChange={() => setNumberIncluded((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charIncluded}
            onChange={() => setCharIncluded((prev) => !prev)}
          />
          <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
