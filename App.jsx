import React from 'react';
import ExamWindow from './pages/ExamWindow';
import questionData from './pages/questions';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <ExamWindow questionData={questionData} />
      </div>
    </div>
  );
};

export default App;
