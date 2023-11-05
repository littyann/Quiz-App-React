import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the correct command to create a new React project?",
      options: [
        { id: 0, text: "npm create-react-app myReactApp", isCorrect: false },
        { id: 1, text: "npx create-react-app", isCorrect: false },
        { id: 2, text: "npm create-react-app", isCorrect: false },
        { id: 3, text: "npx create-react-app myReactApp", isCorrect: true },
      ],
    },
    {
      text: "What command is used to start the React local development server?",
      options: [
        { id: 0, text: "npm start", isCorrect: true },
        { id: 1, text: "npm serve", isCorrect: false },
        { id: 2, text: "npm run dev", isCorrect: false },
        { id: 3, text: "npm buid", isCorrect: false },
      ],
    },
    {
      text: "What is the default local host port that a React development server uses?",
      options: [
        { id: 0, text: "3000", isCorrect: true },
        { id: 1, text: "5000", isCorrect: false },
        { id: 2, text: "8080", isCorrect: false },
        { id: 3, text: "3500", isCorrect: false },
      ],
    },
    {
      text: "Which keyword creates a constant in JavaScript?",
      options: [
        { id: 0, text: "var", isCorrect: false },
        { id: 1, text: "const", isCorrect: true },
        { id: 2, text: "constant", isCorrect: false },
        { id: 3, text: "let", isCorrect: false },
      ],
    },
    {
      text: "Which operator can be used to conditionally render a React component?",
      options: [
        { id: 0, text: "||", isCorrect: false },
        { id: 1, text: "::", isCorrect: true },
        { id: 2, text: "&&", isCorrect: true },
        { id: 3, text: "??", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      {/* <h1>USA Quiz 🇺🇸</h1> */}

      {/* 2. Current Score  */}
      {/* <h2>Score: {score}</h2> */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;