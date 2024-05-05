import React, { useState } from "react";

const CardMemory = () => {
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [matchedBoxes, setMatchedBoxes] = useState([]);
  const [emojis, setEmojis] = useState([
    "😊", "📚", "💡", "😊",
    "🍎", "📚", "💡", "🎉",
    "🚀", "🍎", "🏆", "🌟",
    "🚀", "🏆", "🎉", "🌟"
  ]);

  const shuffleEmojis = () => {
    const shuffledEmojis = [...emojis].sort(() => Math.random() - 0.5);
    setEmojis(shuffledEmojis);
    setSelectedBoxes([]);
    setMatchedBoxes([]);
  };

  const boxHandler = (index) => {
    if (selectedBoxes.length === 2) return;

    if (!selectedBoxes.includes(index)) {
      const newSelectedBoxes = [...selectedBoxes, index];
      setSelectedBoxes(newSelectedBoxes);

      setTimeout(() => {
        if (newSelectedBoxes.length === 2) {
          if (emojis[newSelectedBoxes[0]] === emojis[newSelectedBoxes[1]]) {
            setMatchedBoxes([...matchedBoxes, ...newSelectedBoxes]);
            if (matchedBoxes.length + 2 === emojis.length) {
              alert("You win!");
            }
          }
          setSelectedBoxes([]);
        }
      }, 500);
    }
  };

  return (
    <div className="p-3 bg-[#0d614b] flex flex-col justify-center items-center gap-4">
      <h1 className="text-3xl text-white uppercase tracking-widest">
        Card Memory Game
      </h1>
      <div className="flex flex-wrap justify-center gap-7" style={{ width: "500px" }}>
        {emojis.map((emoji, index) => (
          <div
            onClick={() => boxHandler(index)}
            key={index}
            className={`item ${selectedBoxes.includes(index) || matchedBoxes.includes(index) ? "openBox" : ""} relative flex justify-center items-center bg-white text-2xl`}
            style={{ width: "80px", height: "80px" }}
          >
            {emoji}
          </div>
        ))}
      </div>
      <button
        onClick={shuffleEmojis}
        className="reset bg-[#fff] text-[#267c65] p-3 rounded-md text-2xl focus:bg-[#267c65] border-none focus:text-[#fff]  uppercase tracking-widest font-semibold"
      >
        Reset Game
      </button>
    </div>
  );
};

export default CardMemory;
