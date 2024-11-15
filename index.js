import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <textarea
        value={markdown}
        onChange={handleChange}
        style={{ width: '50%', height: '200px', marginBottom: '20px' }}
      />
      <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;

function reverseSentence(sentence) {
  // Reverse the sentence
  let reversed = sentence.split('').reverse().join('');
  
  // Capitalize the first letter and make the rest lowercase
  reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
  
  return reversed;
}

// Example usage
const input = "javascript";
const output = reverseSentence(input);
console.log(output); // Output: "Tpircsavaj"