import React from "react";

const QuestionDetail = ({ selectedQuestion }) => {
  return (
    <div className="border border-gray-300 p-4 mt-4">
      {selectedQuestion ? (
        <>
          <h2 className="text-lg font-bold mb-2">{selectedQuestion.question}</h2>
          <ul>
            {selectedQuestion.options.map((option, index) => (
              <li key={index} className="mb-2">
                {option}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-gray-600">Select a question to view details.</p>
      )}
    </div>
  );
};

export default QuestionDetail;
