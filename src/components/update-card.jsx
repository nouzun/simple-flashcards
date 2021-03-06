import React, { useState, useEffect, useContext } from 'react';
import Form from './form';
import Context from '../context/context';

const UpdateCard = (props) => {
  const { state, setView } = useContext(Context)
  const cards = state.cards;
  const activeCard = state.activeCard;

  const [ input, setInput ] = useState({
    question: '',
    answer: ''
  });

  const handleChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const editCards = props.editCards;
    editCards(input);
    setView('view-cards');
  }

  const handleReset = () => {
    setView('view-cards');
  }

  useEffect(() => {
    setInput(cards[activeCard])
  }, [])

  return (
    <>
      <h2 className="text-center font-weight-bold mb-3"><i className="fas fa-edit icon"></i> Update Card</h2>
      <div className="container">
        <Form
          card={input}
          change={handleChange}
          reset={handleReset}
          submit={handleSubmit}
        />
      </div>
    </>
  )
}

export default UpdateCard;
