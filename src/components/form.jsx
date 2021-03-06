import React from 'react';

const Form = (props) => {
  const card = props.card;

  return (
    <form onSubmit={props.submit} onReset={props.reset} className="form mx-auto">
      <div className="d-flex flex-column">
        <label htmlFor="question">
          Question:
        </label>
        <textarea name="question" value={card['question']} rows="3" onChange={props.change} />
        <label htmlFor="answer" className="mt-3">
          Answer:
        </label>
        <textarea name="answer" value={card['answer']} rows="3" onChange={props.change} />
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button type="reset" className="btn btn-outline-danger mr-2">Cancel</button>
        <button type="submit" className="btn btn-outline-info">Save Card</button>
      </div>
    </form>
  )
}

export default Form;
