import React, { useState } from 'react';
import './App.css';
import Card from './components/card/card';

function App(props) {
  let [cards, setCards] = useState([
    {question: 'question1', answer: 'answer1', tags:[], source: 'https://developer.mozilla.org/ru/'},
    {question: 'question2', answer: 'answer2', tags:[], source: 'https://developer.mozilla.org/ru/'},
    {question: 'question3', answer: 'answer3', tags:[], source: 'https://developer.mozilla.org/ru/'}
  ]);

  let cardsList = cards.map(el => <Card key={el.question} question={el.question} answer={el.answer}/>)

  return (
    <div className="app-wrapper">
      {cardsList}
    </div>
  );
}

export default App;
