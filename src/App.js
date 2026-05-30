
import React, { useState } from 'react';

const sampleAnswers = {
  react: 'React is a JavaScript library for building user interfaces.',
  java: 'Java is an object-oriented programming language.',
  ai: 'Artificial Intelligence enables machines to simulate human intelligence.'
};

export default function App() {
  const [question, setQuestion] = useState('');
  const [chats, setChats] = useState([]);

  const askAI = () => {
    if (!question.trim()) return;

    const key = Object.keys(sampleAnswers).find(k =>
      question.toLowerCase().includes(k)
    );

    const answer = key
      ? sampleAnswers[key]
      : 'This is a demo AI response. Connect an AI API for real answers.';

    setChats([...chats, { question, answer }]);
    setQuestion('');
  };

  return (
    <div style={{maxWidth:'800px',margin:'auto',padding:'20px'}}>
      <h1>AI Study Assistant</h1>
      <input
        style={{width:'70%',padding:'10px'}}
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        placeholder="Ask a study question..."
      />
      <button onClick={askAI}>Ask AI</button>

      {chats.map((chat,index)=>(
        <div key={index} style={{border:'1px solid #ddd',marginTop:'10px',padding:'10px'}}>
          <b>Question:</b> {chat.question}<br/>
          <b>Answer:</b> {chat.answer}
        </div>
      ))}
    </div>
  );
}
