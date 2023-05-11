import React, { useState } from 'react';
import axios from 'axios';

const Quiz = () => {
 
    
    
    
    
    
    
    
    
    
    
    
    [
    {
      id: 1,
      question: "Quel est le plus grand océan du monde ?",
      answers: [
        { text: "L'océan Pacifique", isCorrect: true },
        { text: "L'océan Atlantique", isCorrect: false },
        { text: "L'océan Indien", isCorrect: false },
        { text: "L'océan Arctique", isCorrect: false },
      ],
      selectedAnswer: null,
    },
    {
      id: 2,
      question: "Quel est le plus grand pays du monde ?",
      answers: [
        { text: "La Russie", isCorrect: true },
        { text: "Le Canada", isCorrect: false },
        { text: "Les États-Unis", isCorrect: false },
        { text: "La Chine", isCorrect: false },
      ],
      selectedAnswer: null,
    },
    {
      id: 3,
      question: "Combien de planètes dans notre système solaire ?",
      answers: [
        { text: "8", isCorrect: true },
        { text: "9", isCorrect: false },
        { text: "10", isCorrect: false },
        { text: "11", isCorrect: false },
      ],
      selectedAnswer: null,
    },
    {
      id: 4,
      question: "Quel est le plus grand désert du monde ?",
      answers: [
        { text: "Le désert du Sahara", isCorrect: true },
        { text: "Le désert de Gobi", isCorrect: false },
        { text: "Le désert d'Atacama", isCorrect: false },
        { text: "Le désert du Kalahari", isCorrect: false },
      ],
      selectedAnswer: null,
    },
  ]);

  const handleAnswerSelected = (questionId, answerIndex) => {
    const updatedQuestions = [...questions];
    const questionToUpdate = updatedQuestions.find(q => q.id === questionId);
    questionToUpdate.selectedAnswer = answerIndex;
    setQuestions(updatedQuestions);
  };

  const handleSubmitQuiz = async () => {
    const answers = questions.map(q => q.selectedAnswer);
    const response = await axios.post('/api/quiz', { answers });
    console.log(response.data);
  };

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <ul>
            {question.answers.map((answer, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  onChange={() => handleAnswerSelected(question.id, index)}
                />
                <label>{answer.text}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
