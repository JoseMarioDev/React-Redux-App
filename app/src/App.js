import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Questions from './components/Questions';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=50')
      .then(res => {
        console.log('RESPONSE', res.data);
        setQuestions(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  console.log('setquestions', questions);

  return (
    <div>
      <Questions questions={questions} />
    </div>
  );
}

export default App;
