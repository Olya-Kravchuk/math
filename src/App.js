import React, { useState } from 'react';

function App() {
  const [examples, setExamples] = useState([]);

  // Функція для генерації прикладів
  const generateExamples = () => {
    const newExamples = [];
    for (let i = 0; i < 30; i++) {
      const num1 = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
      const num2 = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
      const isMultiplication = Math.random() < 0.5; // 50% ймовірність для множення чи ділення

      if (isMultiplication) {
        // Приклад на множення
        newExamples.push(`${num1} × ${num2} = `);
      } else {
        // Приклад на ділення (результат буде цілим числом)
        const product = num1 * num2; // Гарантуємо цілісний результат
        newExamples.push(`${product} : ${num1} = `);
      }
    }
    setExamples(newExamples);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Генератор прикладів на множення та ділення</h1>
      <button
        onClick={generateExamples}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Згенерувати приклади
      </button>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        {examples.map((example, index) => (
          <p key={index}>{example}</p>
        ))}
      </div>
    </div>
  );
}

export default App;