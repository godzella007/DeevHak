import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      questionText: 'Quelle est la capitale de la France?',
      answerOptions: [
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Londres', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est le plus grand océan du monde?',
      answerOptions: [
        { answerText: 'Océan Pacifique', isCorrect: true },
        { answerText: 'Océan Atlantique', isCorrect: false },
        { answerText: 'Océan Indien', isCorrect: false },
        { answerText: 'Océan Arctique', isCorrect: false },
      ],
    },
    {
      questionText:"Qu'est-ce que Git et GitHub ?",
      answerOptions:[
        { answerText: "Git est un système de contrôle de version et GitHub est une plateforme pour héberger des projets Git", isCorrect: true },
        { answerText: "Git est une plateforme pour héberger des projets et GitHub est un système de contrôle de version", isCorrect: false },
        { answerText: "Git et GitHub sont tous deux des systèmes de contrôle de version", isCorrect: false },
        { answerText: "Git et GitHub sont tous deux des plates-formes pour héberger des projets", isCorrect: false },
      ],
    },
    {
      questionText:"Qu'est-ce que le DevOps ?",
      answerOptions:[
        { answerText: "Le DevOps est une pratique qui vise à améliorer la collaboration entre les équipes de développement et les équipes d'exploitation", isCorrect: true },
  { answerText: "Le DevOps est un outil de développement de logiciels", isCorrect: false },
  { answerText: "Le DevOps est une méthode de test de logiciels", isCorrect: false },
  { answerText: "Le DevOps est une pratique qui vise à automatiser tous les processus de développement", isCorrect: false },
      ],
    },
    {
      questionText:"Qu'est-ce que le framework Django ?",
      answerOptions:[
        { answerText: "Django est un framework de développement web en Python", isCorrect: true },
        { answerText: "Django est un langage de programmation", isCorrect: false },
        { answerText: "Django est un système de gestion de base de données", isCorrect: false },
        { answerText: "Django est un outil de test de logiciels", isCorrect: false },
      ],
    },
    {
      questionText:"Qu'est-ce que le Responsive Web Design ?",
      answerOptions:[
        { answerText: "Le Responsive Web Design est une approche de conception web qui permet aux sites web de s'adapter à différents appareils et tailles d'écran", isCorrect: true },
        { answerText: "Le Responsive Web Design est une méthode de développement web qui utilise des outils de conception graphique", isCorrect: false },
        { answerText: "Le Responsive Web Design est une technique de référencement pour les sites web", isCorrect: false },
        { answerText: "Le Responsive Web Design est une méthode de développement web qui se concentre sur la sécurité", isCorrect: false },
      ],
    },
    {
      questionText:"Qu'est-ce que le cloud computing ?",
      answerOptions:[
        { answerText: "Le cloud computing est un modèle de prestation de services informatiques qui permet d'accéder à des ressources informatiques à la demande via Internet", isCorrect: true },
        { answerText: "Le cloud computing est un système de stockage de données en ligne", isCorrect: false },
        { answerText: "Le cloud computing est une technique de cryptage de données", isCorrect: false },
        { answerText: "Le cloud computing est une méthode de développement de logiciels", isCorrect: false },
      ],
    },
   
  ];




  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    
<div className="container mt-3">
<div className="content-body">
    <div className='quiz-container'>
      {showScore ? (
        <div className='score-section'>
          Vous avez obtenu {score} points sur {questions.length} questions.
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div></div></div>
  );
};

export default Quiz;
