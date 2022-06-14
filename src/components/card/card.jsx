import React from 'react';
import cl from './card.module.css'

const Card = (props) => {
  return (
    <div className={cl.card}>
        <h2>Question: {props.question}</h2>
        <p>Answer: {props.answer}</p>
    </div>
  )
}

export default Card