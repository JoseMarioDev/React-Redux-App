import React from 'react';

export default function Question(props) {
  console.log('props from questions', props);
  return (
    <div>
      <h1>{props.question.question}</h1>
    </div>
  );
}
