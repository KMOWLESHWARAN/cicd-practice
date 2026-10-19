// frontend/vite-project/src/App.jsx
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://cicd-practice-pje2.onrender.com/api/data')
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error("API Error: ", err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>CI-CD Automation</h2>
      <h2>It's working....</h2>
      <h2>My Mini Full-Stack App</h2>
      <p style={{ color: 'blue', fontSize: '20px' }}>
        {data ? data : "Loading backend data..."}
      </p>
    </div>
  )
}

export default App