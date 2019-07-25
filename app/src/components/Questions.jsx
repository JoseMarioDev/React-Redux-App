import React from 'react';
import Question from '../components/Question';

export default function Questions(props) {
  console.log('props', props.questions);
  return (
    <div>
      {props.questions.map((question, index) => (
        <Question question={question} key={index} />
      ))}
    </div>
  );
}
