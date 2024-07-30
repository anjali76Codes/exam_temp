import React from "react";

const QuestionNumbers = ({ questionData, onSelectQuestion }) => {
  return (
    <div className="border border-gray-300 p-4">
      <h1 className="text-xl font-bold mb-4">Questions:</h1>

      <div className="flex justify-start">
        <div className="grid grid-cols-3 gap-4">
          {questionData.map((question, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onSelectQuestion(question)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionNumbers;
