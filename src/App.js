import { Picker } from 'emoji-mart';
import { useState } from 'react';
import './App.css';
import "emoji-mart/css/emoji-mart.css";

function App() {
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("_");
    let codesArray = [];
    sym.forEach((ele) => codesArray.push("0x" + ele));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className="App">
      <button className='button' onClick={() => setShowEmojis(!showEmojis)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

      </button>
      <input 
        value = {input}
        onChange={(e) => setInput(e.target.value)}
        type="text" 
        placeholder='emoji picker demo' />
        {showEmojis && (
          <div>
            <Picker onSelect={addEmoji} />
          </div>
        )}
    </div>
  );
}

export default App;
