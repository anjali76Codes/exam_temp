import React, { useState } from "react";
import QuestionNumbers from "./QuestionNumbers";
import QuestionDetail from "./QuestionDetail";

const ExamWindow = ({ questionData }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start md:items-center h-screen w-screen">
      <div className="w-full md:w-1/4 px-4">
        <QuestionNumbers
          questionData={questionData}
          onSelectQuestion={handleSelectQuestion}
        />
      </div>
      <div className="w-full md:w-3/4 px-4">
        <QuestionDetail selectedQuestion={selectedQuestion} />
      </div>
    </div>
  );
};

export default ExamWindow;
